import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TimeRange } from './util/content';
import Navbar from '../../components/Navbar';
export default (PickTime = ({ navigation }) => {
	const [ dayTime, setTime ] = React.useState('');
	const [ color, setColor ] = React.useState('grey');
	const [ colors, setColors ] = React.useState({});
	const [ selectColor, setSelectColor ] = React.useState('green');
	const { color1, color2, color3, color4,color5,color6 } = colors;

	const onPressColorChange = () => {
		// console.log(number)
		setColor('orange');
	};
	useEffect(() => {}, [ color ]);
	return (
		<View style={styles.container}>
		<View style={styles.container1}>
			<Text style={styles.title}>Pick Time</Text>
			{/* {timeRange.map((time,key) => {
				return ( */}
			<View style={styles.dayTime}>
				<Button
					onPress={() => setColors({ color1: 'green', color2: 'grey', color3: 'grey', color4: 'grey' })}
					title={TimeRange.dayTime.time1}
					color={color1 ? color1 : color}
					accessibilityLabel="Learn more about this purple button"
					style={styles.dayTime1}
				/>
				<Button
					onPress={() => setColors({ color2: 'green', color1: 'grey', color3: 'grey', color4: 'grey' })}
					title={TimeRange.dayTime.time2}
					color={color2 ? color2 : color}
					accessibilityLabel="Learn more about this purple button"
					style={styles.dayTime2}
				/>
			</View>
			<View style={styles.dayTime}>
				<Button
					onPress={() => setColors({ color3: 'green', color1: 'grey', color2: 'grey', color4: 'grey' })}
					title={TimeRange.dayTime.time3}
					color={color3 ? color3 : color}
					accessibilityLabel="Learn more about this purple button"
					style={styles.dayTime1}
				/>
				<Button
					// onPress={onPressLearnMore}
					title={TimeRange.dayTime.time4}
					color="orange"
					accessibilityLabel="Learn more about this purple button"
					style={styles.dayTime2}
				/>
			</View>
			<View style={styles.dayTime}>
				<Button
					onPress={() => setColors({ color5: 'green', color1: 'grey', color2: 'grey',color4: 'grey', color4: 'grey' })}
					title={TimeRange.dayTime.time5}
					color={color5 ? color5 : color}
					accessibilityLabel="Learn more about this purple button"
					style={styles.dayTime1}
				/>
				<Button
					// onPress={onPressLearnMore}
					title={TimeRange.dayTime.time6}
					color="orange"
					accessibilityLabel="Learn more about this purple button"
					style={styles.dayTime2}
				/>
			</View>
			<View style={{ flexDirection: 'row', paddingTop: 40, marginLeft: 70 }}>
				<Icon name="circle" size={27} color="orange" />
				<Text style={{fontSize: 18,}} > Already Booked times</Text>
			</View>
			{/* );
			})} */}
			<View style={styles.nextButton}>
				{/* <Text>{startdate}</Text> */}
				<TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('BookList')}>
					{/* <Icon name="facebook" size={35} color="orange"/> */}
					<Text style={styles.next}>Done</Text>
				</TouchableOpacity>
			</View>
		</View>
		<Navbar navigation={navigation}/>
		</View>
	);
});

const styles = StyleSheet.create({
	container1: {
		flex: 1,
		backgroundColor: 'white',
		top:130
	},
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	title: {
		fontSize: 35,
		fontWeight: 'bold',
		color: '#000000',
		top: -40,
		left: 115
		
	},
	
	calendar: {
		marginTop: 20
	},
	iconBtn: {
		width: 150,
		backgroundColor: 'green',
		alignItems: 'center',
		borderRadius: 25,
		padding:5,
		height:40
	},
	nextButton: {
		flex: 3,
		marginTop: '50%',
		left: '30%',
		right: "10%"
	},
	next: {
		color: 'white',
		width: 50,
		fontSize: 20,
		height: 40,
		borderRadius: 20
	},
	dayTime: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginTop: 40
	},
	dayTime1: {
		marginTop: 10,
		marginLeft: 50,
		backgroundColor: "#CCC9C0",
		width: 100,
		height: 30,
		textAlign: 'center'
	},
	dayTime2: {
		marginTop: 10,
		marginLeft: 100,
		backgroundColor: "#CCC9C0",
		width: 100,
		height: 30,
		textAlign: 'center'
	},
	iconBtn: {
		width: 150,
		backgroundColor: '#CCC9C0',
		alignItems: 'center',
		borderRadius: 10,
		padding:5,
		height:50,
		shadowOpacity: 0.7,
        shadowRadius: 7.49,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 6,
	},
	nextButton: {
		marginTop: '30%',
		left: 130,
		flex: 3,
		textAlign:"center",
		
	},
	next: {
		
		color: 'white',
		width: 70,
		fontSize: 25,
		height: 40,
		borderRadius: 20
	}
});
