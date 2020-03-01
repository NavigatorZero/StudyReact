function Car(props) {

    const classes = ['card'];

    if (props.car.marked) {
        classes.push("marked")

    }

    return (
        <div className={classes.join(' ')} onClick={props.onMark}>
            <div className="card-img">
                <img src={props.car.img}
                     alt={props.car.name}/>
            </div>
            <h3>{props.car.name}</h3>
            <p>{props.car.price}</p>
        </div>

    )

}

class App extends React.Component {

    state = {

        cars: [

            {
                marked: false,
                name: "Subaru BRZ",
                price: 100000,
                img: "https://www.super-hobby.ru/zdjecia/9/2/5/2721_rd.jpg"
            },

            {
                marked: false,
                name: "Toytoa GT",
                price: 15000,
                img: "https://st2.zr.ru/_ah/img/_KOVVWNDg70r7uF8Ngs-9g=s800"
            },


            {
                marked: false,
                name: "Mitsubishi lancer Evo",
                price: 25000,
                img: "https://profile.ru/wp-content/uploads/2019/06/2015-6098442015-mitsubishi-lancer-evolution-final-edition1-min.jpg"
            }


        ],

        visible: true,
        appTitle: "CarsAplication",

    };

    handleMarked(name) {

        console.log(name);
        const cars = this.state.cars.concat();

        const car = cars.find(c => c.name === name);
        car.marked = !car.marked;

        this.setState({cars})


    }

    renderCars() {

        if (!this.state.visible) {
            return null

        }
        return this.state.cars.map(car => {
            return (
                <Car
                    car={car}
                    key={car.name + Math.random()}
                    onMark={this.handleMarked.bind(this, car.name)}
                />
            )
        })
    }


    titleChangeHandler(title) {

        if (title.trim()=== ""){
            return
        }
        this.setState({

            appTitle: title

        })


    }


    Hide() {
        this.setState({visible: !this.state.visible});
        console.log("work")
    }

    render() {
        const style = {
            marginRight: 20


        };
        return (
            <div className="app">
                <h1>{this.state.appTitle}</h1>
                <button onClick={() => this.Hide()}
                        style={style}>Toggle
                </button>

                <input type="text" placeholder="changeTitle"
                       onChange={(event) => this.titleChangeHandler(event.target.value)}
                       value={this.state.appTitle}/>

                <hr/>
                <div className="list">

                    {this.renderCars()}
                </div>
            </div>

        )

    }
}


ReactDOM.render(<App/>, document.getElementById("root"));