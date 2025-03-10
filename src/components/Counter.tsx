import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAppSelector, useAppDispatch } from '../redux/hookx.tsx';
import { increment, decrement, incrementByAmount } from '../redux/features/counterSlice';

const Counter = () => {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <View>
            <Text>Sayı: {count}</Text>
            <Button title="Arttır" onPress={() => dispatch(increment())} />
            <Button title="Azalt" onPress={() => dispatch(decrement())} />
            <Button title="10 Ekle" onPress={() => dispatch(incrementByAmount(10))} />
        </View>
    );
};

export default Counter;
