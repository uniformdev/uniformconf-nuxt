import type { Component } from 'vue';
import {
  DefaultNotImplementedComponent,
  type ComponentProps,
} from '@uniformdev/canvas-vue';

import Hero from './Hero.vue';
import TalkList from './TalkList.vue';
import WhyAttend from './WhyAttend.vue';
import Talk from './Talk.vue';
import RegisterForm from './RegisterForm.vue';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

const mapping: ComponentMapping = {
  hero: Hero,
  talklist: TalkList,
  talk: Talk,
  whyattend: WhyAttend,
  registrationForm: RegisterForm,
  header: Navbar,
  footer: Footer,
};

type ComponentMapping = Record<string, Component<any>>;

export function resolveRenderer(
  componentName: string,
): Component<ComponentProps<any>> | null {
  return mapping[componentName] ?? DefaultNotImplementedComponent;
}

export default mapping;
