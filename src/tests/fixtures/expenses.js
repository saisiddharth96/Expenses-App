import moment from 'moment'

const expenses = [
    {
      id: "1",
      description: "Gum",
      note: "",
      amount: 12,
      createdAt: 0
    },
    {
      id: "2",
      description: "Rent",
      note: "",
      amount: 500,
      createdAt: moment(0)
        .subtract(4, "days")
        .valueOf()
    },
    {
      id: "3",
      description: "Water bill",
      note: "",
      amount: 300,
      createdAt: moment(0)
        .add(4, "days")
        .valueOf()
    }
];

export default expenses;