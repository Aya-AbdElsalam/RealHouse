import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaFlag,
  FaPhoneAlt,
  HiSolidUserCircle,
  RiMenu2Line,
  MdCloseTwotone,
  MdPhoneintalk,
  BiFacebook,
  MdDaterangeTwotone,
  MdPhotosizeselectsmallSharp,
  CoTwitter,
  CoLinkedinIn,
  CoInstagram,
  FaMobileAlt,
  CoWhatsapp,
  GiHomeGarage,
  MdEmailRound,
  BiCheck,
  CoPinterest,
  MdBedroomchildRound,
  PrYoutube,
  FaSearchPlus,
  FaFax,
  MdKeyboardarrowdownTwotone,
  IoReturnUpBack,
  FaSearchMinus,
  FaArrowRight,
  MdLocationonSharp,
  BiSearch,
  MdBathroomTwotone,
  CoBorderStyle,
  OiHeartFill,
  FaMinus,
  FaPlus,
  IoCheckmarkDoneOutline,
} from "oh-vue-icons/icons";

addIcons(
  MdKeyboardarrowdownTwotone,
  FaSearchMinus,
  FaFax,
  FaArrowRight,
  FaMinus,
  CoBorderStyle,
  OiHeartFill,
  MdBedroomchildRound,
  MdBathroomTwotone,
  FaPlus,
  FaFlag,
  IoCheckmarkDoneOutline,
  IoReturnUpBack,
  FaPhoneAlt,
  HiSolidUserCircle,
  MdPhotosizeselectsmallSharp,
  RiMenu2Line,
  FaMobileAlt,
  MdCloseTwotone,
  BiCheck,
  FaSearchPlus,
  MdPhoneintalk,
  BiSearch,
  BiFacebook,
  CoTwitter,
  GiHomeGarage,
  MdDaterangeTwotone,
  CoLinkedinIn,
  MdEmailRound,
  CoInstagram,
  CoPinterest,
  MdLocationonSharp,
  CoWhatsapp,
  PrYoutube
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});