import { StackViewTransitionConfigs } from 'react-navigation';

const iosModalRoutes = ['ModalMusicPlayer'];

export default (transitionProps, prevTransitionProps) => {
  const isModal = iosModalRoutes.some(
    screenName =>
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
  );

  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    isModal
  );
};
