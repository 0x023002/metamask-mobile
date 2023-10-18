import React from 'react';
import { shallow } from 'enzyme';
import NetworkInfo from './';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import initialBackgroundState from '../../../util/test/initial-background-state.json';

const mockStore = configureMockStore();
const initialState = {
  privacy: {
    approvedHosts: {},
  },
  engine: {
    backgroundState: initialBackgroundState,
  },
	privacy: {
		approvedHosts: {},
	},
	engine: {
		backgroundState: {
			NetworkController: {
				provider: { type: MAINNET, rpcTarget: '' },
			},
			PreferencesController: { useStaticTokenList: true, frequentRpcList: [] },
		},
	},
	networkOnboarded: {
		networkOnboardedState: [{ network: MAINNET, onboarded: true }],
	},
};

const store = mockStore(initialState);

describe('NetworkInfo', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <NetworkInfo
          type={''}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
          ticker={''}
        />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
	it('should render correctly', () => {
		const wrapper = shallow(
			<Provider store={store}>
				<NetworkInfo
					type={''}
					onClose={function (): void {
						throw new Error('Function not implemented.');
					}}
					ticker={''}
				/>
			</Provider>
		);
		expect(wrapper.dive()).toMatchSnapshot();
	});
});
