import { Routes, Route } from "react-router";
import { Tests } from "@/pages/tests";
import { Words } from "@/pages/words";
import { Main } from "@/pages/main";
import { routesEnum } from "../const/routesEnum";
import { Test } from "@/pages/tests/test";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path={routesEnum.MAIN} element={<Main />} />
      <Route path={routesEnum.WORDS} element={<Words />} />
      <Route path={routesEnum.TESTS}>
        <Route index element={<Tests />} />
        <Route path={`:${routesEnum.TEST}`} element={<Test />} />
        <Route path={routesEnum.NEW_TEST} element={<Test />} />
      </Route>
    </Routes>
  );
};
