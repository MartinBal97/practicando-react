import CreditCard from "./components/CreditCard/CreditCard";

function App() {

  const cards = [
    {
        type:'Visa',
        number:'4569 7852 5687 8845',
        expirationMonth: 3,
        expirationYear: 21,
        bank:'BNP',
        owner:'Maxence Bouret',
        cssClass:'card green'
    },{
        type:'Master Card',
        number:'4569 7852 5687 0995',
        expirationMonth: 3,
        expirationYear: 21,
        bank:'N26',
        owner:'Jason Bourne',
        cssClass:'card grey'
    },{
        type:'Visa',
        number:'4569 7852 5687 6984',
        expirationMonth: 12,
        expirationYear: 19,
        bank:'Santander Bank',
        owner:'Alfredo Ramos',
        cssClass:'card gold'
    }
    ]

  return (
    <>
     {cards.map((card,i) => {
        return <CreditCard type={card.type} number={card.number} expirationMonth={card.expirationMonth} expirationYear={card.expirationYear} bank={card.bank} owner={card.owner} cssClass={card.cssClass} key={i}/>
     })}
    </>
  );
}

export default App;
