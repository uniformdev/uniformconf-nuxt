import { ComponentInstance } from '@uniformdev/canvas';
import { DefaultNotImplementedComponent } from '@uniformdev/canvas-vue';

import Hero from './Hero.vue';
import TalkList from './TalkList.vue';
import WhyAttend from './WhyAttend.vue';
import Talk from './Talk.vue';
import RegisterForm from './RegisterForm.vue';
import Navbar from './NavBar.vue';
import Footer from './Footer.vue';

const mapping = {
  hero: Hero,
  talklist: TalkList,
  talk: Talk,
  whyattend: WhyAttend,
  registrationForm: RegisterForm,
  header: Navbar,
  footer: Footer,
};

export function resolveRenderer(componentInstance: ComponentInstance) {
  return mapping[componentInstance.type] ?? DefaultNotImplementedComponent;
}

export default mapping;
