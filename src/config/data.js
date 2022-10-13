import ucb from "../assets/logo/ucb.png";
import istm from "../assets/logo/istm.png";
import isp from "../assets/logo/isp.png";
import isc from "../assets/logo/isc.png";
import uob from "../assets/logo/uob.jpg";
import uea from "../assets/logo/uea.jpg";

const logos = [ucb, istm, isp, isc];

export const dataUniversite = [
  {
    id: 1,
    label: "UCB",
    title: "Université Catholique de Bukavu",
    bp: "258 Bukavu",
    logo: ucb,
  },
  {
    id: 2,
    label: "UOB",
    title: "Université Officielle de Bukavu",
    bp: "258 Bukavu",
    logo: uob,
  },
  {
    id: 3,
    label: "ISP",
    title: "Institut Supérieur Pédagogique",
    bp: "258 Bukavu",
    logo: isp,
  },
  {
    id: 4,
    label: "ISC",
    title: "Institut Supérieur de Commerce",
    bp: "258 Bukavu",
    logo: isc,
  },
  {
    id: 5,
    label: "ISTM",
    title: "Institut Supérieur de Technique Medicale",
    bp: "120 Bukavu",
    logo: istm,
  },
  {
    id: 6,
    label: "UEA",
    title: "Université Evangélique de Bukavu",
    bp: "258 Bukavu",
    logo: uea,
  },
];

export const options = [
  { value: "UCB", label: "Université Catholique de Bukavu" },
  { value: "UOB", label: "Université Officielle de Bukavu" },
  { value: "UEA", label: "Université Evangélique de Bukavu" },
  { value: "UOB", label: "Institut Supérieur Pédagogique" },
  { value: "UOB", label: "Institut Supérieur Pédagogique" },
];
export default logos;
