import { makeAutoObservable, runInAction } from "mobx";

 const CreateAppStore = () => {
  const store = {
    tests: [],
    get completedTestsCount() {
      return store.tests.filter((test) => test.completed).length;
    },
    get incompletedTestsCount() {
      return store.tests.length - store.completedTestsCount;
    },
    addTest(test) {
      runInAction(() => {
        store.tests.push(test);
      });
    },
    completeTest(test) {
      test.completed = !test.completed;
    },
    async fetchTests() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      const tests = await response.json();
      runInAction(() => {
        store.addTest(tests);
      });
    }
  };
  return makeAutoObservable(store);
}

export default CreateAppStore