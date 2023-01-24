import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component<{ texto: String }> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Button;