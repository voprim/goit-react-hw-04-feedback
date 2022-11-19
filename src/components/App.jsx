import React, { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import {Notification} from "./Notification/Notification";
import css from './App.module.css';

export class App extends Component {
    static defaultProps = {
        initGood: 0,
        initNeutral: 0,
        initBad: 0,
    };
  
    state = {
        good: this.props.initGood,
        neutral: this.props.initNeutral,
        bad: this.props.initBad,
    }
    
    handleClick = (button) => {
		  this.setState({ [button]: this.state[button] + 1 });
	  };

    countTotalFeedback = () => {
        const { good, bad, neutral } = this.state;
        return good + neutral + bad;
    };
    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good * 100) / this.countTotalFeedback());
    }
    
    render() {
      const { good, bad, neutral } = this.state;
        return (
            
            <div className={css.wrap}>
                <Section  title="Please leave feedback">
                    <FeedbackOptions
                      options={['good', 'neutral', 'bad']}
                      onLeaveFeedback={this.handleClick } />
                </Section>

                {!this.countTotalFeedback() ? (
                    <Notification message="There is no feedback" />
                ) : (
                    <Section title="Statistics" >
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()} />
                    </Section>)
                }
            </div>
        );
    }
}