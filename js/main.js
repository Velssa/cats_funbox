"use strict";

function Cards(props) {

    const classCard = ['cards__one_border'];
    const classPoint = ['cards__one_point'];

    if (props.goods.marked) {
        classCard.push('bg_select');
        classPoint.push('bg_select');
        props.goods.topTitleStatus = 2;
    } else {
        classCard.push('bg_default');
        classPoint.push('bg_default');
        props.goods.topTitleStatus = 1;
        props.goods.style = 'cards__one_title_top';
        props.goods.topTitle = 'Сказочное заморское яство';
    }

    if (props.goods.quantity > 0) {
        if (props.goods.marked) {
            return (
                <div className="card__box">
                    <div className="cards__one" onClick={props.onMark} onMouseOut={props.onMouseOut}>
                        <div className={classCard.join(' ')}>
                            <div className="cards__one_content">
                                <div className={props.goods.style}>
                                    {props.goods.topTitle}
                                </div>
                                <div className="cards__one_title">
                                    {props.goods.name}
                                </div>
                                <div className="cards__one_title_bottom">
                                    {props.goods.consist}
                                </div>
                                <div className="cards__one_text">
                                    <span>{props.goods.point}</span> порций<br/>
                                    {props.goods.present}<br/>
                                    {props.goods.present2}
                                </div>
                            </div>
                        </div>
                        <div className="cards__one_image">
                            <div className={classPoint.join(' ')}>
                                <div className="cards__one_point_num">{props.goods.weight}</div>
                                <div className="cards__one_point_lot">кг</div>
                            </div>
                        </div>
                    </div>
                    <div className="cards__one_bottom-text">
                        {props.goods.description}
                    </div>
                </div>
            )
        } else if (!props.goods.marked) {
            return (
                <div className="card__box">
                    <div className="cards__one" onClick={props.onMark} onMouseOut={props.onMouseOut}>
                        <div className={classCard.join(' ')}>
                            <div className="cards__one_content">
                                <div className={props.goods.style}>
                                    {props.goods.topTitle}
                                </div>
                                <div className="cards__one_title">
                                    {props.goods.name}
                                </div>
                                <div className="cards__one_title_bottom">
                                    {props.goods.consist}
                                </div>
                                <div className="cards__one_text">
                                    <span>{props.goods.point}</span> порций<br/>
                                    {props.goods.present}<br/>
                                    {props.goods.present2}
                                </div>
                            </div>
                        </div>
                        <div className="cards__one_image">
                            <div className={classPoint.join(' ')}>
                                <div className="cards__one_point_num">{props.goods.weight}</div>
                                <div className="cards__one_point_lot">кг</div>
                            </div>
                        </div>
                    </div>
                    <div className="cards__one_bottom-text">
                        Чего сидишь? Порадуй котэ, <a onClick={props.onMark}>купи</a>.
                    </div>
                </div>
            )
        }
    } else {
        return (
            <div className="card__box">
                <div className="cards__one no_cursor">
                    <div className="cards__one_border bg_disabled">
                        <div className="cards__one_content">
                            <div className="cards__one_title_top text_disabled">
                                Сказочное заморское яство
                            </div>
                            <div className="cards__one_title text_disabled">
                                {props.goods.name}
                            </div>
                            <div className="cards__one_title_bottom text_disabled">
                                {props.goods.consist}
                            </div>
                            <div className="cards__one_text text_disabled">
                                <span>{props.goods.point}</span> порций<br/>
                                {props.goods.present}<br/>
                                {props.goods.present2}
                            </div>
                        </div>
                    </div>
                    <div className="cards__one_image disabled">
                        <div className="cards__one_point bg_disabled">
                            <div className="cards__one_point_num">{props.goods.weight}</div>
                            <div className="cards__one_point_lot">кг</div>
                        </div>
                    </div>
                </div>
                <div className="cards__one_bottom-text-disabled">
                    Печалька, {props.goods.consist} закончился.
                </div>
            </div>
        )
    }
}

class Main extends React.Component {

    state = {
        goods: [
            {
                id: 1,
                marked: false,
                quantity: 1,
                topTitleStatus: 1,
                topTitle: 'Сказочное заморское яство',
                name: 'Нямушка',
                consist: 'с фуа-гра',
                point: 10,
                present: 'мышь в подарок',
                weight: '0,5',
                description: 'Печень утки разварная с артишоками.',
                style: 'cards__one_title_top'
            },
            {
                id: 2,
                quantity: 1,
                marked: false,
                topTitleStatus: 1,
                topTitle: 'Сказочное заморское яство',
                name: 'Нямушка',
                consist: 'с рыбой',
                point: 40,
                present: '2 мыши в подарок',
                present2: '',
                weight: '2',
                description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                style: 'cards__one_title_top'
            },
            {
                id: 3,
                quantity: 0,
                marked: false,
                topTitleStatus: 1,
                topTitle: 'Сказочное заморское яство',
                name: 'Нямушка',
                consist: 'с курой',
                point: 100,
                present: '5 мышей в подарок',
                present2: 'заказчик доволен',
                weight: '5',
                description: 'Филе из цыплят с трюфелями в бульоне.',
                style: 'cards__one_title_top'
            }
        ],
    };

    handleMarked(id) {
        const cards = this.state.goods.concat();
        const card = cards.find(i => i.id === id);
        card.marked = !card.marked;

        this.setState({goods: cards})
    }

    handleMouseOut(id) {
        const cards = this.state.goods.concat();
        const card = cards.find(i => i.id === id);

        if (card.topTitleStatus === 2) {
            card.topTitle = 'Котэ не одобряет?';
            card.style = 'title_top_select';
        } else {
            card.topTitle = 'Сказочное заморское яство';
            card.style = 'cards__one_title_top';
        }
        this.setState({goods: cards})
    }

    renderCards() {
        return this.state.goods.map(card => {
            return (
                <Cards
                    goods={card}
                    key={card.id + Math.random()}
                    onMark={this.handleMarked.bind(this, card.id)}
                    onMouseOut={this.handleMouseOut.bind(this, card.id)}
                />
            )
        })
    }

    render() {
        return (
            <div className="main">
                <div className="top-title">Ты сегодня покормил кота?</div>
                <div className="cards">
                    {this.renderCards()}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
