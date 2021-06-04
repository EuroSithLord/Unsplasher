import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addKeyword, removeKeyword } from '../redux/actions/keywordActions';
import { SearchDiv, SearchTitle, SearchInput, SearchSection, SearchButton, SearchKeywords, Keyword, ModalText, DrawerButton } from './minor/Body/Search';
import { ResultsSection, ResultsDivGrid, ResultsPhoto, PaginationContainer, PaginationNumber } from './minor/Body/Results';
import { OuterContainer, InnerContainer } from './minor/Body/Container';
import { notificationNotFound, notificationServerError, notificationClientError, notificationRedirectError, notificationNoKeyword } from './minor/Body/Notifications';
import '../../node_modules/antd/dist/antd.css'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, notification, Modal, Drawer } from 'antd';

class Body extends React.Component{
    state = {
        keyword: '',
        spinning: false, 
        clientId: '3uDN7ipOmIzLa2Bomeg4JWCLcWQdPnT1rm8scPD3Jnw',
        page: 1,
        photosPerPage: 10,
        requestSucces: false,
        results: [],
        totalPages: 0,
        totalResults: 0,
        isModalVisible: false,
        isDrawerVisible: false,
    }
    
    handleChange = (event) => {
        this.setState({
            ...this.state, keyword: event.target.value,
        });
    }

    showPages = () => {
        const indexOfLastPhoto = this.state.page * this.state.photosPerPage;
        const indexOfFirstPhoto = indexOfLastPhoto - this.state.photosPerPage;
        const currentPhotos = this.state.results.slice(indexOfFirstPhoto, indexOfLastPhoto);
    }

    handleRemove = (event) => {
        this.setState({ ...this.state, keyword: event.target.innerText, isDrawerVisible: true })
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') this.requestProcedure();
    }

    requestProcedure = (page) => {
        this.state.isDrawerVisible ? this.setState({ ...this.state,  spinning: true, isDrawerVisible: false}) : this.setState({ ...this.state,  spinning: true, isSearchModalVisible: true});
        const url = `https://api.unsplash.com/search/photos?query=${this.state.keyword}&client_id=${this.state.clientId}&page=${page}`;
        axios.get(url).then((response) => {
            if (response.data.results.length === 0 && response.status === 200) {
                notification.open(notificationNotFound);
                this.setState({...this.state, spinning: false});
                return;
            }
            if (response.status >= 300) {
                notification.open(notificationRedirectError);
                this.setState({...this.state, spinning: false});
                return;
            }
            if (response.status >= 400) {
                notification.open(notificationClientError);
                this.setState({...this.state, spinning: false});
                return;
            }
            if (response.status >= 500){
                notification.open(notificationServerError);
                this.setState({...this.state, spinning: false});
                return;
            }
            this.setState({...this.state, spinning: false, results: response.data.results, totalPages: response.data.total_pages, 
                totalResults: response.data.total, requestSucces: true
            });
            console.log(this.state);
            console.log(response);
        });
    }

    handleClick = () => {
        this.state.keyword ? this.requestProcedure() : notification.open(notificationNoKeyword);
    }

    handlePageClick = (event) => {
        this.setState({
            ...this.state, page: event.target.id
        });
        this.requestProcedure(event.target.id);
    }

    handleOkSearch = () => {
        this.props.addingKeyword(this.state.keyword);
        this.setState({
            ...this.state, isSearchModalVisible: false
        });
    }

    handleCancelSearch = () => {
        this.setState({
            ...this.state, isSearchModalVisible: false
        });
    }

    handleOkDelete = () => {
        this.props.removingKeyword(this.state.keywordToRemove);
        this.setState({
            ...this.state, isDrawerVisible: false
        });
    }

    handleCloseDrawer = () => {
        this.setState({
            ...this.state, isDrawerVisible: false
        });
    }

    render(){
        const loadIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
        return(
            <OuterContainer>
                <InnerContainer>
                    <SearchSection>
                        <SearchTitle>Search an image</SearchTitle>
                        <SearchDiv>
                            <SearchInput type='text' placeholder='Search photos...' onChange={this.handleChange} value={this.state.keyword}  onKeyPress={this.handleKeyPress}/>
                            <SearchButton onClick={this.handleClick}>Search</SearchButton>
                            {   this.state.keyword &&
                                <Modal title='Save' visible={this.state.isSearchModalVisible} onOk={this.handleOkSearch} onCancel={this.handleCancelSearch}>
                                    <ModalText>Do you want to save this keyword?</ModalText>
                                </Modal>
                            }
                        </SearchDiv>
                        <SearchKeywords>
                            {
                                this.props.keywords && this.props.keywords.map((word) => {
                                    return <Keyword key={word} onClick={this.handleRemove}>{word}</Keyword>
                                })
                            }
                            <Drawer title='Delete/Search' placement='right' visible={this.state.isDrawerVisible} onClose={this.handleCloseDrawer}>
                                <DrawerButton onClick={this.handleOkDelete}>Delete</DrawerButton>
                                <DrawerButton onClick={this.requestProcedure}>Search</DrawerButton>
                            </Drawer>
                        </SearchKeywords>
                    </SearchSection>
                    <ResultsSection>
                        <ResultsDivGrid>
                            <Spin indicator={loadIcon} tip='Loading photos...' spinning={this.state.spinning} style={{position: 'absolute', left: '50%', top: '50%'}}/>
                            {
                                this.state.results.map(photo => {
                                    return <ResultsPhoto key={photo.id} src={photo.urls.regular} alt={photo.alt_description} />
                                })
                            }
                        </ResultsDivGrid>
                        <PaginationContainer>
                                {
                                    this.state.requestSucces && 
                                    <>
                                        <PaginationNumber onClick={this.handlePageClick} id={1} className='active-page'>1</PaginationNumber>
                                        {
                                            this.showPages()
                                        }
                                        <PaginationNumber onClick={this.handlePageClick} id={this.state.totalPages}>{this.state.totalPages}</PaginationNumber>
                                    </>
                                }
                            </PaginationContainer>
                    </ResultsSection>
                </InnerContainer>
            </OuterContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        keywords: state.keywords
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addingKeyword: (keyword) => dispatch(addKeyword(keyword)),
        removingKeyword: (keyword) => dispatch(removeKeyword(keyword))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);