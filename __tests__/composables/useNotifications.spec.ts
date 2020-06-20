import { useNotifications } from "../../src/composables/useNotifications";
import { nextTick } from "vue";
import { Notification } from "../../src/types";

const mock: Notification = {
  message: "Test message",
};

describe("useTheme", () => {
  const { dismiss, notify, notifications } = useNotifications();

  jest.useFakeTimers();

  test("Initializes the nofications ref store", () => {
    expect(notifications.value).toMatchObject([]);
  });

  test("Adds a notification by funcion notify()", async () => {
    notify(mock);
    expect(notifications.value.length).toBe(1);

    jest.runOnlyPendingTimers();
  });

  test("Dismisses a message by funcion dismiss()", async () => {
    notify(mock);
    expect(notifications.value.length).toBe(1);

    dismiss(notifications.value.indexOf(mock));
    expect(notifications.value.length).toBe(0);
  });

  test("Dismisses a message after 6 seconds", async () => {
    notify(mock);
    expect(notifications.value.length).toBe(1);

    jest.advanceTimersByTime(6000);
    expect(notifications.value.length).toBe(0);
  });
});
