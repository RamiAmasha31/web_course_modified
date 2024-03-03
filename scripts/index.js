import { dishesData,drinksData,alcoholData } from '../models/dishesModel.js'
import aboutUsData from '../models/aboutUsModel.js'
import reservationsData from '../models/reservationsModel.js'
import galleryData from '../models/galleryModel.js'
import cateringData from '../models/cateringModel.js'
import privateEventsData from '../models/privateEventsModel.js'
import heroData from '../models/heroModel.js'
import {injectHeroSection,injectPrivateEvents,injectCaering,injectGalleryData,injectReservationForm,injectAboutUsData,renderCards} from './injectors.js'
import initializeScript from './initScript.js'

initializeScript();
injectHeroSection(heroData);
renderCards(dishesData);
renderCards(drinksData);
renderCards(alcoholData);
injectAboutUsData(aboutUsData);
injectReservationForm(reservationsData);
injectGalleryData(galleryData);
injectCaering(cateringData);
injectPrivateEvents(privateEventsData);

 

