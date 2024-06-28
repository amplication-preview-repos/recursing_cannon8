import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TradingSignalList } from "./tradingSignal/TradingSignalList";
import { TradingSignalCreate } from "./tradingSignal/TradingSignalCreate";
import { TradingSignalEdit } from "./tradingSignal/TradingSignalEdit";
import { TradingSignalShow } from "./tradingSignal/TradingSignalShow";
import { ToolList } from "./tool/ToolList";
import { ToolCreate } from "./tool/ToolCreate";
import { ToolEdit } from "./tool/ToolEdit";
import { ToolShow } from "./tool/ToolShow";
import { TelegramSubscriptionList } from "./telegramSubscription/TelegramSubscriptionList";
import { TelegramSubscriptionCreate } from "./telegramSubscription/TelegramSubscriptionCreate";
import { TelegramSubscriptionEdit } from "./telegramSubscription/TelegramSubscriptionEdit";
import { TelegramSubscriptionShow } from "./telegramSubscription/TelegramSubscriptionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Traday"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TradingSignal"
          list={TradingSignalList}
          edit={TradingSignalEdit}
          create={TradingSignalCreate}
          show={TradingSignalShow}
        />
        <Resource
          name="Tool"
          list={ToolList}
          edit={ToolEdit}
          create={ToolCreate}
          show={ToolShow}
        />
        <Resource
          name="TelegramSubscription"
          list={TelegramSubscriptionList}
          edit={TelegramSubscriptionEdit}
          create={TelegramSubscriptionCreate}
          show={TelegramSubscriptionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
      </Admin>
    </div>
  );
};

export default App;
