export default function (offset = 0) {
  const isScrolled = ref(false);

  const updateIsScrolled = () => {
    isScrolled.value = window.scrollY > offset;
  };

  const onScroll = () => {
    updateIsScrolled();
  };
  const addScrollListener = () =>
    window.addEventListener('scroll', onScroll, { passive: true });
  onMounted(() => {
    updateIsScrolled();
    addScrollListener();
  });
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
  });

  return isScrolled;
}
