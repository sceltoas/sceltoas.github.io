import * as React from 'react';
import {connect} from 'react-redux';
import Entry from './Entry.jsx';
import './AppComponent.scss';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onSaveHandler = this.onSaveHandler.bind(this);
    this.onCancelHandler = this.onCancelHandler.bind(this);
  }

  onSaveHandler() {
    this.props.dispatch({type: 'SAVE'});
  }

  onCancelHandler() {
    this.props.dispatch({type: 'CANCEL'});
  }

  render() {

    return (
      <div className="section bg-dark white-text">
        {this.props.items.map((item, index) => {
          if (index % 2 === 0) {
            return <Entry key={index} left item={item}/>;

          } else {
            return <Entry key={index} right item={item}/>;
          }
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: [{
      "id": "776850979580936193",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1474050681000,
      "text": "#Scweet! @Scelto_as er på 6. plass på #Tekna sin liste over vekstvinnere i IT-sektoren. Check it: https://t.co/6WXgYthVMi",
      "imageUrl": null,
      "tags": ["scweet", "tekna"],
      "mentions": ["scelto_as"],
      "links": ["teknamagasinet.no/ny-serie-de-ny…"],
      "location": null,
      "latitude": null,
      "longitude": null
    }, {
      "id": "717989412894875648",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1460016990000,
      "text": "Hjertelig velkommen til vår niende mann, Erik! @frontsidespin https://t.co/oIoQA9idgc #scelto",
      "imageUrl": null,
      "tags": ["scelto"],
      "mentions": ["frontsidespin"],
      "links": ["scel.to/lnkd"],
      "location": null,
      "latitude": null,
      "longitude": null
    }, {
      "id": "696975916736647168",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1455006982000,
      "text": "@Scelto_as er stolt underleverandør til @greenbirdIT i ny rammeavtale på arkitektur med #flytoget.",
      "imageUrl": null,
      "tags": ["flytoget"],
      "mentions": ["scelto_as", "greenbirdit"],
      "links": [],
      "location": null,
      "latitude": null,
      "longitude": null
    }, {
      "id": "686468773038157826",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1452501884000,
      "text": "Vi er stolte av å presentere Erlend Nilsen som vår nyeste partner. Han er en svært dyktig systemutvikler og arkitekt. Velkommen! @Scelto_as",
      "imageUrl": null,
      "tags": [],
      "mentions": ["scelto_as"],
      "links": [],
      "location": null,
      "latitude": null,
      "longitude": null
    }, {
      "id": "679958919092006912",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1450949813000,
      "text": "God #Scjul til kunder, partnere og dyktige ansatte!",
      "imageUrl": null,
      "tags": ["scjul"],
      "mentions": [],
      "links": [],
      "location": null,
      "latitude": null,
      "longitude": null
    }, {
      "id": "660565654504939520",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1446326099000,
      "text": "Fortsatt god #scelg! @SUSHISAMBA kan anbefales! https://t.co/KQYcXbtCeB",
      "imageUrl": "http://pbs.twimg.com/media/CSrM8Z7U8AAAyb0.jpg",
      "tags": ["scelg"],
      "mentions": ["sushisamba"],
      "links": [],
      "location": "City of London, London",
      "latitude": 51.51448,
      "longitude": -0.092911
    }, {
      "id": "660494923628720134",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1446309235000,
      "text": "Ikke bare lek og moro! Nå: faglig opplegg og strategi på @WHotels ved #LeicesterSquare. https://t.co/vwgm41S4Co",
      "imageUrl": "http://pbs.twimg.com/media/CSqMn-wUwAAviad.jpg",
      "tags": ["leicestersquare"],
      "mentions": ["whotels"],
      "links": [],
      "location": "London, England",
      "latitude": 51.500092,
      "longitude": -0.148936
    }, {
      "id": "660471978361561088",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1446303765000,
      "text": "Vi har vært på #scamfordbridge og sett #mourinho sin siste kamp! https://t.co/YQNyYmdyHD",
      "imageUrl": "http://pbs.twimg.com/media/CSp3jRhWIAACo2m.jpg",
      "tags": ["scamfordbridge", "mourinho"],
      "mentions": [],
      "links": [],
      "location": "Hammersmith, London",
      "latitude": 51.498387,
      "longitude": -0.216108
    }, {
      "id": "660402451972014081",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1446287188000,
      "text": "Vi er på #scelgetur i London! Her fra gårsdagens besøk på #petrus. https://t.co/VqxHR0dMrb",
      "imageUrl": "http://pbs.twimg.com/media/CSo4hJEUkAAi7C8.jpg",
      "tags": ["scelgetur", "petrus"],
      "mentions": [],
      "links": [],
      "location": null,
      "latitude": null,
      "longitude": null
    }, {
      "id": "649502255167614980",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1443688379000,
      "text": "Gratulerer så mye med dagen, @levitate_no! Lykke til. Det blir spennende å følge dere. #scmile",
      "imageUrl": null,
      "tags": ["scmile"],
      "mentions": ["levitate_no"],
      "links": [],
      "location": null,
      "latitude": null,
      "longitude": null
    }, {
      "id": "646621243647619072",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1443001492000,
      "text": "#sclunch @ #hotellbristol! http://t.co/kRdBNINNIO",
      "imageUrl": "http://pbs.twimg.com/media/CPlClgdWwAAUlIG.jpg",
      "tags": ["sclunch", "hotellbristol"],
      "mentions": [],
      "links": [],
      "location": null,
      "latitude": null,
      "longitude": null
    }, {
      "id": "643722504452853760",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1442310379000,
      "text": "Scelto ønsker velkommen til @gbilben! http://t.co/9zE0dnGOzE #awesome #growing #organiskvekst",
      "imageUrl": null,
      "tags": ["awesome", "growing", "organiskvekst"],
      "mentions": ["gbilben"],
      "links": ["scel.to/b/4"],
      "location": null,
      "latitude": null,
      "longitude": null
    }, {
      "id": "639747518163755008",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1441362668000,
      "text": "Scelto går fra 4 til 6! http://t.co/7z0Lfv23ZH Velkommen @tuxbear & @xoiram! #growing #awesome #moretocome",
      "imageUrl": null,
      "tags": ["growing", "awesome", "moretocome"],
      "mentions": ["tuxbear", "xoiram"],
      "links": ["scel.to/b/3"],
      "location": null,
      "latitude": null,
      "longitude": null
    }, {
      "id": "637215765922488320",
      "url": null,
      "medium": "Twitter",
      "postedUtcTimestamp": 1440759052000,
      "text": "@Scelto_as har fått kontorplass hos @eggsdesign og byr på #scake http://t.co/6jW4EgX00J",
      "imageUrl": "http://pbs.twimg.com/media/CNfYWvsXAAIqjLB.jpg",
      "tags": ["scake"],
      "mentions": ["scelto_as", "eggsdesign"],
      "links": [],
      "location": null,
      "latitude": null,
      "longitude": null
    }]
  };
}

export default connect(mapStateToProps)(AppComponent);


AppComponent.propTypes = {
  dispatch: React.PropTypes.func
};
