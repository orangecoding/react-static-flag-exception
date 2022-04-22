import useStyles from './styles';
import React from 'react';

export default function SomeFancyComponent({data}){
        if (data) {
            useStyles({  });
            return (
                <div>
                    I am broken
                </div>
            );
        }
        return null;
    }

SomeFancyComponent.defaultProps = {
    data: null,

};
