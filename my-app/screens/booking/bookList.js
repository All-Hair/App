import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';
import { getBookedData } from './service/StoreData';
import Box from 'native-base'
import Navbar from '../../components/Navbar';

export default (BookList = ({ navigation }) => {
	const lists = getBookedData();
	const [ showAlert, setShowAlert ] = React.useState(true);

	return (
		<View style={styles.container}>
		<View style={styles.container1}>
		<Text style={styles.title}>Booklist</Text>
			<AwesomeAlert
				show={showAlert}
				showProgress={false}
				title="Success !"
				message="Your Appoinment is booked successfully"
				closeOnTouchOutside={true}
				closeOnHardwareBackPress={false}
				showCancelButton={true}
				showConfirmButton={true}
				//   cancelText="No, cancel"
				confirmText="Ok"
				confirmButtonColor="#CCC9C0"
				//   onCancelPressed={() => {
				//    setShowAlert(false)
				//   }}
				onConfirmPressed={() => {
					setShowAlert(false);
				}}
			/>
			<View>
				<ScrollView>
					{lists.map((list, i) => {
						return (
							<TouchableOpacity key={i} onPress={() => navigation.navigate('Appointment',list)}>
								<Card key={i} containerStyle={{borderRadius: 10 ,borderWidth:1.4 ,borderColor:'black'}}  >
									{/* <Card.Divider/> */}
									<View key={i} style={styles.cardContainer}>
										<View key={i} style={styles.user}>
											<View style={styles.columnText}>
												<Text style={styles.name1}>{list.name}</Text>
												<Text style={styles.name2}>{list.date}</Text>
												<Text style={{ color: list.color }}>{list.validity}</Text>
											</View>
										</View>
									</View>
									<Text style={styles.name3}> {list.price} DT</Text>
								</Card>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			</View>
		</View>
		<Navbar navigation={navigation}/>
		</View>
	);
});

const styles = StyleSheet.create({
	title: {
		fontSize: 35,
		fontWeight: 'bold',
		color: '#000000',
		top: -60,
		left: 115
		
	},
	container1: {
		flex: 1,
		backgroundColor: 'white',
		top:130
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	emailContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	cardContainer: {
		width: 320,
		height: 70
	},
	user: {
		flexDirection: 'row'
	},
	homeTitle: {
		padding: 50
	},
	image: {
		width: 80,
		height: 80,
		// paddingBottom: 20,
		// marginTop: 100,
		// marginLeft:20,
		marginRight: 20
	},
	columnText: {
		bottom: 15
	},
	name1: {
		marginTop: 10,
		color: 'black',
		fontWeight: 'bold'
	},
	name2: {
		marginTop: 10,
		fontSize: 12
	},
	name3: {
		marginTop: 5,
		color: 'white',
		textAlign: 'center',
		left: 290,
		bottom: 90,
		width: 45,
		backgroundColor: '#ccc9c0',
		borderBottomLeftRadius:10,
		borderTopRightRadius:10
	},
	forgot_button: {
		marginLeft: 10
	},
	homeTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'green'
		// fontFamily:"fangsong"
	}
});
