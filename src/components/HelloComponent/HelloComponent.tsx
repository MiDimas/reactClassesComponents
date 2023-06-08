import {Component, ReactNode} from "react";
import './HelloComponent.scss';
type CounterState = { count: number; }
export class HelloComponent extends Component<{}, CounterState>{
    state = {
        count: 0
    };

    handleChange = () => {
        this.setState({count: this.state.count + 1})
    };
    render (): ReactNode { return (
        <>
            <div className={'helloBtn'} onClick={this.handleChange}>Hello World</div>
            <div>Count-click: {this.state.count}</div>
        </>
    );}
}