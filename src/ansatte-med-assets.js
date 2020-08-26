import TorEric from './images/mugshots/toreric.jpg';
import OleTommy from './images/mugshots/oletommy.jpg';
import Herman from './images/mugshots/herman.jpg';
import Haaken from './images/mugshots/haaken.jpg';
import Marius from './images/mugshots/marius.jpg';
import OleAndre from './images/mugshots/oleandre.jpg';
import Gustav from './images/mugshots/gustav.jpg';
import Erlend from './images/mugshots/erlend.jpg';
import Richard from './images/mugshots/richard.jpg';
import Erik from './images/mugshots/erik.jpg';
import JanErik from './images/mugshots/janerik.jpg';
import Ivar from './images/mugshots/ivar.jpg';
import Vetle from './images/mugshots/vetle.jpg';
import Sean from './images/mugshots/sean.jpg';
import Ken from './images/mugshots/ken.jpg';
import LarsFredrik from './images/mugshots/larsfredrik.jpg';
import FredrikB from './images/mugshots/fredrikb.jpg';
import FredrikS from './images/mugshots/fredriks.jpg';
import Terje from './images/mugshots/terje.jpg';
import LarsOlav from './images/mugshots/larsolav.jpg';
import Jarle from './images/mugshots/jarle.jpg';
import JanTore from './images/mugshots/jantore.jpg';
import AnnKatrin from './images/mugshots/annkatrin.jpg';
import Jorgen from './images/mugshots/jorgen.jpg';
import Andreas from './images/mugshots/andreas.jpg';
import Hallvard from './images/mugshots/hallvard.jpg';
import Frederik from './images/mugshots/frederik.jpg';
import Bard from './images/mugshots/baard.jpg';
import Ismar from './images/mugshots/ismar.jpg';
/*import NoPicYet from './images/mugshots/no-pic-yet.jpg';*/

import TorEricCV from './cvs/Tor_Eric_Sandvik.pdf';
import OleTommyCV from './cvs/Ole_Tommy_Lid-Strand.pdf';
import HermanCV from './cvs/Herman_Crawfurd_Svensen.pdf';
import HaakenCV from './cvs/Håken_Stark.pdf';
import MariusCV from './cvs/Marius_Aune_Gravdal.pdf';
import OleAndreCV from './cvs/Ole-Andrè_Riga-Johansen.pdf';
import GustavCV from './cvs/Gustav_Andrè_Bilben.pdf';
import ErlendCV from './cvs/Erlend_Nilsen.pdf';
import RichardCV from './cvs/Richard_Rennemo.pdf';
import ErikCV from './cvs/Erik_Salhus.pdf';
import JanErikCV from './cvs/Jan_Erik_Svendsen.pdf';
import IvarCV from './cvs/Ivar_Nilsen.pdf';
import VetleCV from './cvs/Vetle_Valebjørg.pdf';
import SeanCV from './cvs/Sean_Erik_Scully.pdf';
import KenCV from './cvs/Ken_Gullaksen.pdf';
import LarsFredrikCV from './cvs/Lars_Fredrik_Lunde.pdf';
import FredrikbCV from './cvs/Fredrik_Bjørnøy.pdf';
import FredriksCV from './cvs/Fredrik_Svensen.pdf';
import TerjeCV from './cvs/Terje_Lonoy.pdf';
import LarsOlavCV from './cvs/Lars_Olav_Torvik.pdf';
import AnnKatrinCV from './cvs/Ann-Katrin_Gagnat.pdf';
import JoergenCV from './cvs/Joergen_Ringen.pdf';
import AndreasCV from './cvs/Andreas_Nilsen.pdf';
import HallvardCV from './cvs/Hallvard_Andreas_Stark.pdf';
import IsmarCV from './cvs/Ismar_Slomic.pdf';
import FrederikCV from './cvs/Frederik_Skytte.pdf';

import Drinker from './images/drinker.jpeg';
import Skateboard from './images/skateboard.jpg';
import IvarBackground from './images/ivar_background.jpg';
import HermanBackground from './images/herms-background.jpg';
import Bybilde from './images/city-panorama.jpeg';
import TorEricBackground from './images/tor_eric_fisk.jpg';
import HallvardBackground from './images/hallvard-background.jpg';
import AndreasBackground from './images/andreas-background.jpg';
import Solbriller from './images/man-person-sunglasses-relaxing.jpeg';
import RetroSykkel from './images/bicycle_sea.jpeg';
import Nerd from './images/geek-dark.jpeg';
import Kode from './images/code_background.jpeg';
import Scooter from './images/background4.jpg';
import RustenBil from './images/background2.jpg';
import Cards from './images/cards.jpeg';
import Music from './images/music_lover.jpeg';
import Yoga from './images/yoga.jpeg';
import FrederikBackground from './images/frederik-background.jpg';
import ansatte from './ansatte';
import {
    showAvailableConsultantsFirst
} from './utils';

export const ansatteMedAssets = {
    toreric: {
        ...ansatte.toreric,
        image: TorEric,
        linkToCV: TorEricCV,
        customImage: TorEricBackground,
    },
    oletommy: {
        ...ansatte.oletommy,
        image: OleTommy,
        linkToCV: OleTommyCV,
        customImage: RetroSykkel,
    },
    herman: {
        ...ansatte.herman,
        image: Herman,
        linkToCV: HermanCV,
        customImage: HermanBackground,
    },
    haaken: {
        ...ansatte.haaken,
        image: Haaken,
        linkToCV: HaakenCV,
        customImage: RetroSykkel,
    },
    marius: {
        ...ansatte.marius,
        image: Marius,
        linkToCV: MariusCV,
        customImage: Nerd,
    },
    oleandre: {
        ...ansatte.oleandre,
        image: OleAndre,
        linkToCV: OleAndreCV,
        customImage: Drinker,
    },
    gustav: {
        ...ansatte.gustav,
        image: Gustav,
        linkToCV: GustavCV,
        customImage: Kode,
    },
    erlend: {
        ...ansatte.erlend,
        image: Erlend,
        linkToCV: ErlendCV,
        customImage: Scooter,
    },
    richard: {
        ...ansatte.richard,
        image: Richard,
        linkToCV: RichardCV,
        customImage: Bybilde,
    },
    erik: {
        ...ansatte.erik,
        image: Erik,
        linkToCV: ErikCV,
        customImage: Skateboard,
    },
    janerik: {
        ...ansatte.janerik,
        image: JanErik,
        linkToCV: JanErikCV,
        customImage: Solbriller,
    },
    ivar: {
        ...ansatte.ivar,
        image: Ivar,
        linkToCV: IvarCV,
        customImage: IvarBackground,
    },
    vetle: {
        ...ansatte.vetle,
        image: Vetle,
        linkToCV: VetleCV,
        customImage: RustenBil,
    },
    sean: {
        ...ansatte.sean,
        image: Sean,
        linkToCV: SeanCV,
        customImage: RustenBil,
    },
    ken: {
        ...ansatte.ken,
        image: Ken,
        linkToCV: KenCV,
        customImage: RustenBil,
    },
    larsfredrik: {
        ...ansatte.larsfredrik,
        image: LarsFredrik,
        linkToCV: LarsFredrikCV,
        customImage: RustenBil,
    },
    fredrikb: {
        ...ansatte.fredrikb,
        image: FredrikB,
        linkToCV: FredrikbCV,
        customImage: RustenBil,
    },
    fredriks: {
        ...ansatte.fredriks,
        image: FredrikS,
        linkToCV: FredriksCV,
        customImage: RustenBil,
    },
    terje: {
        ...ansatte.terje,
        image: Terje,
        linkToCV: TerjeCV,
        customImage: Music,
    },
    larsolav: {
        ...ansatte.larsolav,
        image: LarsOlav,
        linkToCV: LarsOlavCV,
        customImage: Cards,
    },
    jarle: {
        ...ansatte.jarle,
        image: Jarle,
        linkToCV: '#',
        customImage: Music,
    },
    jantore: {
        ...ansatte.jantore,
        image: JanTore,
        linkToCV: '#',
        customImage: Music,
    },
    annkatrin: {
        ...ansatte.annkatrin,
        image: AnnKatrin,
        linkToCV: AnnKatrinCV,
        customImage: Music,
    },
    jorgen: {
        ...ansatte.jorgen,
        image: Jorgen,
        linkToCV: JoergenCV,
        customImage: Music,
    },
    baard: {
        ...ansatte.baard,
        image: Bard,
        linkToCV: '#',
        customImage: Music,
    },
    andreas: {
        ...ansatte.andreas,
        image: Andreas,
        linkToCV: AndreasCV,
        customImage: AndreasBackground,
    },
    hallvard: {
        ...ansatte.hallvard,
        image: Hallvard,
        linkToCV: HallvardCV,
        customImage: HallvardBackground,
    },
    ismar: {
        ...ansatte.ismar,
        image: Ismar,
        linkToCV: IsmarCV,
        customImage: Yoga,
    },
    frederik: {
        ...ansatte.frederik,
        image: Frederik,
        linkToCV: FrederikCV,
        customImage: FrederikBackground,
    },
};

export const ansatteArray = () =>
    Object.keys(ansatteMedAssets).map(key => {
        let ansatt = ansatteMedAssets[key];
        ansatt.key = key;
        return ansatt;
    });

export const sortedAnsatte = ansatteArray()
    .map(ansatt => ansatt)
    .sort(showAvailableConsultantsFirst);