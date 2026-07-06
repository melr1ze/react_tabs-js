import { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTab, setSelectedTab] = useState('tab-1');

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {tabs.find(tab => tab.id === selectedTab)?.title}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {/* Вкладка 1 */}
            <li
              data-cy="Tab"
              className={cn({ 'is-active': selectedTab === 'tab-1' })}
            >
              <a
                href="#tab-1"
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();
                  setSelectedTab('tab-1');
                }}
              >
                Tab 1
              </a>
            </li>

            {/* Вкладка 2 */}
            <li
              data-cy="Tab"
              className={cn({ 'is-active': selectedTab === 'tab-2' })}
            >
              <a
                href="#tab-2"
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();
                  setSelectedTab('tab-2');
                }}
              >
                Tab 2
              </a>
            </li>

            <li
              data-cy="Tab"
              className={cn({ 'is-active': selectedTab === 'tab-3' })}
            >
              <a
                href="#tab-3"
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();
                  setSelectedTab('tab-3');
                }}
              >
                Tab 3
              </a>
            </li>
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.find(tab => tab.id === selectedTab)?.content}
        </div>
      </div>
    </div>
  );
};
