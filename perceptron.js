const database = require('./database');

class Perceptron {

    constructor() {
        this.result = null;
        this.learnStep = 0.1;

        this.bias = 0;
        this.isFarWeight = 0;
        this.isExpensiveWeight = 0;
        this.hasFriendsWeight = 0;
    }

    think(individual) {
        return this.isFarWeight * individual.isFar + this.isExpensiveWeight * individual.isExpensive + this.hasFriendsWeight * individual.hasFriends + this.bias;
    }

    check(think) {
        return (think <= 0) ? 0 : 1;
    }

    train() {
        let trainSteps = 0;
        let individuals = database;

        for (; trainSteps<10; trainSteps++) {

            individuals.forEach(individual => {
                let think = this.think(individual);
                let o = this.check(think);
                if (o != individual.result) {
                    this.learn(o, individual);
                }
            });

            // console.log(`
            //     this.isFarWeight=${this.isFarWeight}
            //     this.isExpensiveWeight=${this.isExpensiveWeight}
            //     this.hasFriendsWeight=${this.hasFriendsWeight}
            //     this.bias=${this.bias}
            //     ========================================================
            // `);
        }

        // now i check if my neural is smart as i think.
        let other_individual = {
            isFar: 0,
            isExpensive: 1,
            hasFriends: 0
        }

        let other_think = this.think(other_individual);
        let other_check = this.check(other_think);

        console.log(`neste caso a pessoa ${other_check ? 'vai' : 'não vai'} no show!`);
    }


    deltaWeight(individualValue, individualResult, currentResult) {
        return this.learnStep * (individualResult - currentResult) * individualValue;
    }


    learn(o, individual) {

        let delta = this.deltaWeight(individual.isFar, individual.result, o);
        this.isFarWeight = this.isFarWeight + delta;

        delta = this.deltaWeight(individual.isExpensive, individual.result, o);
        this.isExpensiveWeight = this.isExpensiveWeight + delta;


        delta = this.deltaWeight(individual.hasFriends, individual.result, o);
        this.hasFriendsWeight = this.hasFriendsWeight + delta;


        delta = this.deltaWeight(1, individual.result, o);
        this.bias = this.bias + delta;
    }
}

module.exports = Perceptron;