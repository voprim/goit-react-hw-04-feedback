import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import {Notification} from "./Notification/Notification";
import css from './App.module.css';

export function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

        return (  
            <div className={css.wrap}>
                <Section  title="Please leave feedback">
                    <FeedbackOptions
                      options={['good', 'neutral', 'bad']}
                      onLeaveFeedback={ addFeedback } />
                </Section>

                {!countTotalFeedback() ? (
                    <Notification message="There is no feedback" />
                ) : (
                    <Section title="Statistics" >
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={countTotalFeedback()}
                            positivePercentage={countPositiveFeedbackPercentage()} />
                    </Section>)
                }
            </div>
        );
}