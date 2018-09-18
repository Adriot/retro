
import React, { Component } from 'react';





export  default  class PagingDots extends React.Component {
    getIndexes(count, inc) {
        const arr = [];
        for (let i = 0; i < count; i += inc) {
            arr.push(i);
        }
        return arr;
    }

    getListStyles() {
        return {
            position: 'relative',
            width:500,
            top: 0,
            marginTop:20,
            paddingLeft: 20,
            marginLeft:25,
            paddingRight:40
        };
    }

    getListItemStyles() {
        return {
            listStyleType: 'none',
            display: 'inline-block',
        };
    }

    getButtonStyles(active) {
        return {

            width: 1,
            height: 1,
            margin: 5,
            textIndent: -999,
            backgroundColor: '#0009',
            border: 1,
            borderStyle: 'solid',
            borderRadius: 10,
            background: active? 'white':'transparent',
            color: 'white',
            cursor: 'pointer',
            padding: 5,
            outline: 0,
            fontSize: 24,
            opacity: active ? 1 : 1,
        };
    }

    render() {
        const indexes = this.getIndexes(
            this.props.slideCount,
            this.props.slidesToScroll,
        );
        return (
            <ul style={this.getListStyles()}>
                {indexes.map(index => {
                    return (
                        <li style={this.getListItemStyles()} key={index}>
                            <button
                                style={this.getButtonStyles(this.props.currentSlide === index)}
                                onClick={this.props.goToSlide.bind(null, index)}
                            >
                                &bull;
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}
