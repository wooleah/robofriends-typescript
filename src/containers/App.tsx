import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

import { setSearchField, requestRobots } from '../actions';
import Header from '../components/Header';

const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
});
const mapDispatchToProps = dispatch => ({
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>): void => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
});

export interface IRobot {
    id: number,
    name: string,
    email: string
}

interface IAppProps {
}

interface IAppState {
    robots: Array<IRobot>,
    searchField: string,
    isPending: boolean
}

class App extends Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
    }

    componentDidMount(): void {
        this.props.onRequestRobots();
    }

    render(): JSX.Element {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(
            robot => robot.name
                .toLowerCase()
                .includes(searchField.trim().toLowerCase())
        )

        return isPending
            ? <h1 className="tc f1">Loading</h1>
            : (
                <div className="tc" >
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

// Now App is subscribed to redux store
// mapStateToProps: what state should I listen to
// mapDispatchToProps: what actions should I listen to
export default connect(mapStateToProps, mapDispatchToProps)(App);