import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../../components/Navbar';
export default DateSelect = ({ navigation }) => {
	const [ selectDate, setDate ] = React.useState('');
	const onDateChange = (date) => {
		setDate(date);
	};
	const desableDates = ['2023-01-23T06:56:36.267Z','2022-06-01T06:56:36.267Z','2021-09-03T06:56:36.267Z']
	useEffect(() => {}, [ selectDate ]);
	return (
		
		<View style={styles.container}>
			<View style={styles.container1} >
			<Text style={styles.title}>Select Date</Text>
			<View style={styles.calendar}>
				<CalendarPicker
					 todayTextStyle={{fontWeight: 'bold'}}
					 todayBackgroundColor={'transparent'}
					//  minDate={today}
					 disabledDates= {desableDates}
					 disabledDatesTextStyle={{backgroundColor:"orange", color:"black",borderRadius:20, width:33,height:33,textAlign:"center"}}
					 onDateChange = {date => onDateChange(date)}
					//  selectedStartDate='2021-10-01T00:00:00.00Z'
					 minDate= '2021-10-01T00:00:00.00Z'
					//  maxDate= '2021-10-31T00:00:00.00Z'
				/>
				<View style={{flexDirection: 'row',paddingTop:40, marginLeft:30}}>
				<Icon name="circle" size={27} color="orange"/>
				<Text style={{fontSize: 18,}}> Already Booked days</Text>
				</View>
			</View>
			<View style={styles.nextButton}>
				{/* <Text>{startdate}</Text> */}
				<TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('PickTime',selectDate)}>
					{/* <Icon name="facebook" size={35} color="orange"/> */}
					<Text style={styles.next}>Next</Text>
				</TouchableOpacity>
			</View>
			</View>
			<Navbar navigation={navigation}/>
		</View>
	);
};

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
		left: 100
		// fontFamily:"fangsong"
	},
	calendar: {
		flex: 2,
		marginTop: 20
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
		marginTop: '50%',
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
