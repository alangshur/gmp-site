import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import SurveyQuestion from './question';
import { withFirebase } from '../firebase';

class SurveyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: 'sfg',
            0: -1, 1: -1, 2: -1, 3: -1, 4: -1, 5: -1
        }
    }

    render() {
        return (
            <div
                style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',

                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    paddingTop: '50px',
                    paddingBottom: '50px',

                    color: '#36454F',
                    userSelect: 'none',
                    msUserSelect: 'none',
                    KhtmlUserSelect: 'none',
                    MozUserSelect: 'none',
                    overflow: 'scroll'
                }}
            >

                {/* title */}
                <div
                    style={{
                        display: 'flex',
                        alignContent: 'center',

                        width: '300px',
                        marginBottom: '70px',
                        
                        fontSize: '20px',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}
                >
                    Answer Each Question & Submit at Bottom
                </div>

                {/* survey questions */}
                <SurveyQuestion
                    num={0}
                    prompt={'Do you plan on raising your chidlren as religious?'}
                    zeroPrompt={'They can decide for themselves.'}
                    tenPrompt={'Orthodox all the way!'}
                    update={this._updateResponseValue}
                />

                <SurveyQuestion
                    num={1}
                    prompt={'Do you plan on raising your chidlren as religious?'}
                    zeroPrompt={'They can decide for themselves.'}
                    tenPrompt={'Orthodox all the way!'}
                    update={this._updateResponseValue}
                />

                <SurveyQuestion
                    num={2}
                    prompt={'Do you plan on raising your chidlren as religious?'}
                    zeroPrompt={'They can decide for themselves.'}
                    tenPrompt={'Orthodox all the way!'}
                    update={this._updateResponseValue}
                />  

                <SurveyQuestion
                    num={3}
                    prompt={'Do you plan on raising your chidlren as religious?'}
                    zeroPrompt={'They can decide for themselves.'}
                    tenPrompt={'Orthodox all the way!'}
                    update={this._updateResponseValue}
                />   

                {/* error text */}
                {this.state.error &&
                    <div
                        style={{
                            width: '210px',
                            marginBottom: '15px',

                            color: '#dc3545',
                            fontSize: '12px'
                        }}
                    >
                        {this.state.error}
                    </div>
                }

                {/* submit button */}
                <Button
                    size='sm'
                    variant='secondary'
                    style={{
                        width: '210px',
                        marginBottom: '15px'
                    }}
                >
                    Submit
                </Button>

                {/* back button */}
                <Button
                    onClick={() => this.props.history.push('/')}
                    size='sm'
                    variant='secondary'
                    style={{
                        width: '210px'
                    }}
                >
                    Back
                </Button>
            </div>
        );
    }

    _updateResponseValue = (num, val) => {
        this.setState({ num: val });
    }
}

export default withRouter(withFirebase(SurveyPage));