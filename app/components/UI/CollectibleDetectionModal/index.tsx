import React from 'react';
import { StyleSheet, View } from 'react-native';
import { strings } from '../../../../locales/i18n';
import Banner from '../../../component-library/components/Banners/Banner/Banner';
import { BannerVariant } from '../../../component-library/components/Banners/Banner';
import { ButtonVariants } from '../../../component-library/components/Buttons/Button';
import { TextVariant } from '../../../component-library/components/Texts/Text';

const styles = StyleSheet.create({
  alertBar: {
    width: '95%',
    marginBottom: 15,
  },
});

interface Props {
  /**
   * Navigation object needed to link to settings
   */
  navigation: any;
}

const CollectibleDetectionModal = ({ navigation }: Props) => {
  const goToSecuritySettings = () => {
    navigation.navigate('SettingsView', {
      screen: 'SecuritySettings',
      params: {
        scrollToDetectNFTs: true,
      },
    });
  };
  return (
    <View style={styles.alertBar}>
      <Banner
        variant={BannerVariant.Alert}
        title={strings('wallet.nfts_autodetect_title')}
        description={strings('wallet.nfts_autodetection_desc')}
        actionButtonProps={{
          variant: ButtonVariants.Link,
          label: strings('wallet.nfts_autodetect_cta'),
          onPress: goToSecuritySettings,
          textVariant: TextVariant.BodyMD,
        }}
      />
    </View>
  );
	alertBar: {
		width: '95%',
		marginBottom: 15,
	},
});

interface Props {
	/**
	 * Function for dismissing of modal
	 */
	onDismiss: () => void;
	/**
	 * Navigation object needed to link to settings
	 */
	navigation: any;
}

const CollectibleDetectionModal = ({ onDismiss, navigation }: Props) => {
	const goToSecuritySettings = () => {
		navigation.navigate('SettingsView', {
			screen: 'SettingsFlow',
			params: {
				screen: 'SecuritySettings',
				params: {
					scrollToBottom: true,
				},
			},
		});
	};

	return (
		<View style={styles.alertBar}>
			<Alert small onDismiss={onDismiss} type={AlertType.Info}>
				<Text infoModal bold small>
					{strings('wallet.nfts_autodetection_title')}
				</Text>
				{'\n'}
				<Text infoModal small>
					{strings('wallet.nfts_autodetection_desc')}
				</Text>
				{'\n'}
				<Text infoModal link bold small onPress={goToSecuritySettings}>
					{strings('wallet.nfts_autodetection_cta')}
				</Text>
			</Alert>
		</View>
	);
};

export default CollectibleDetectionModal;
