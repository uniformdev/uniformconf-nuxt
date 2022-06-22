import {
  DefaultNotImplementedComponent,
  // type ComponentProps,
} from '@uniformdev/canvas-vue';

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

export function resolveRenderer(componentName: string) {
  return mapping[componentName] ?? DefaultNotImplementedComponent;
}

export default mapping;
