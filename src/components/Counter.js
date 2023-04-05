import { useCounterStore } from "../../store";

export const Counter = () => {
  const counterNumber = useCounterStore((state) => state.number);
  const increaseNumber = useCounterStore(
    (state) => state.increaseCounterNumber
  );
  const decreaseNumber = useCounterStore(
    (state) => state.decreaseCounterNumber
  );
  const loggetNumber = useCounterStore((state) => state.logNumber);

  return (
    <div>
      <button
        onClick={() => {
          increaseNumber();
          loggetNumber();
        }}
      >
        +
      </button>
      {counterNumber}
      <button
        onClick={() => {
          decreaseNumber();
          loggetNumber();
        }}
      >
        -
      </button>
    </div>
  );
};
