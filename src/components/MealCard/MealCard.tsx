import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './MealCard.style.tsx';

interface MealCardProps {
    mealName: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    onPress: () => void;
}


const MealCard: React.FC<MealCardProps> = ({ mealName, calories, protein, carbs, fat, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.title}>{mealName}</Text>
            <Text>Calories: {calories}</Text>
            <Text>Protein: {protein}g | Carbs: {carbs}g | Fat: {fat}g</Text>
        </TouchableOpacity>
    );
};

export default MealCard;
