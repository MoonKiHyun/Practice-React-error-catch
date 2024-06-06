import React, { Component } from 'react';
import * as Sentry from "@sentry/react";

class ErrorBoundary extends Component {
    state = {
        error: false
    };

    // error: 에러 종류, info: 에러 발생 위치
    componentDidCatch(error, info) {
        console.log('에러가 발생');
        console.log({
            error,
            info
        });
        this.setState({
            error: true
        });

        if (ProcessingInstruction.env.NODE_ENV === 'production') {
            Sentry.captureException(error, { extra: info });
        }
    }

    render() {
        if(this.state.error) {
            return (
                <h1>에러 발생!</h1>
            )
        }
        // React 컴포넌트 태그 사이에 포함된 내용을 보여준다.
        return this.props.children;
    }
}

export default ErrorBoundary; 