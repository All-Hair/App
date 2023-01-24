import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
import Navbar from '../../components/Navbar';
import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
// import getStyleData from './service/StyleData';

export default (Appointment = ({ navigation }) => {
	// const { name, avatar, date, address, price } = route.params;
	// const users = getStyleData();
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.coverImage}
				source={{
					uri: "https://pbs.twimg.com/media/DQ3w7xPX4AEIABM.jpg"
				}}
			>
				<View style={styles.textView}>
					<Text style={styles.imageText}>all hair saloon</Text>
					<Text style={styles.subimageText}>15 styling Staff </Text>
					<View style={styles.starIconView}>
						<Icon name="star" style={styles.IconView} size={25} color={25 > 10 ? 'gold' : 'red'} />
						<Icon name="star" style={styles.IconView} size={25} color="gold" />
						<Icon name="star" style={styles.IconView} size={25} color="gold" />
						<Icon name="star" size={25} color="white" />
						<Icon name="star" size={25} color="white" />
					</View>
				</View>
			</ImageBackground>
			<View style={styles.styleinList}>
				<Card style={styles.cardContainer} containerStyle={{borderRadius: 10 ,borderWidth:1.4 ,borderColor:'black' ,top:20}} >
					{/* <ListItem style={styles.cardContainer}> */}
					<View style={styles.user}>
						<View style={styles.columnText} >
						<EvilIcons name="location" size={30} color="black" />
							<Text style={{ fontSize: 18}}>  adress : ariana </Text>
						</View>
						
						<View style={styles.columnText}>
						<Fontisto name="date" size={20} color="black" />
							<Text style={{ fontSize: 18}} >    2023-01-24  at 3:00 PM</Text>
						</View>
						<View>
							<Text style={{ fontSize: 20, fontWeight: '700' }}>Service :</Text>
							<View style={styles.serviceText}>
								<Text style={{ fontSize: 18}}>Hair Styling</Text>
								<Text style={{ fontSize: 18}}>12 DT</Text>
							</View>
							<View style={styles.serviceText}>
								<Text style={{ fontSize: 18}}>Total Price</Text>
								<Text style={{ fontSize: 18}}> 12 DT</Text>
							</View>
						</View>
					</View>
					{/* </ListItem> */}
				</Card>
				<View >
				{/* <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('Home')}>
					{/* <Icon name="facebook" size={35} color="orange"/> */}
					{/* <Text style={styles.next}>Hom</Text> */} 
				{/* </TouchableOpacity> */}
				</View>
			</View>
			<Navbar navigation={navigation}/>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	title: {
		top: -150,
		fontSize: 25,
		fontWeight: 'bold',
		// color: 'white',
		textAlign: 'center',
		
	},
	user: {
		backgroundColor: '#fff',
		borderRadius:3,
	},
	coverImage: {
		width: '100%',
		height: '70%'
	},
	textView: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		top: 70,
		left: 0,
		right: 160,
		bottom: 0
	},
	imageText: {
		fontSize: 30,
		color: 'white',
		fontWeight: 'bold'
	},
	subimageText: {
		fontSize: 15,
		color: 'white',
		right: 40
	},
	starIconView: {
		flexDirection: 'row',
		right: 30
	},
	IconView: {
		color: 'white',
		left:-3
	},
	cardContainer: {
		width: 300,
		height: 300,
		
		
	},
	styleinList: {
		bottom: 180,
		width: '100%',
		
	},
	styleImage: {
		width: 80,
		height: 80,
		marginRight: 20,
		// left:12
	
	},
	columnText: {
		flexDirection: 'row',
		margin: 15,
		
	},
	serviceText: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	
	loginText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white'
		// fontFamily:"fangsong"
	},
	iconBtn: {
		left:110,
		top:30,
		width: 180,
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
		marginTop: '70%',
		left: 130,
		flex: 3,
		textAlign:"center",
		
	},
	next: {
		
		color: 'white',
		width: 80,
		fontSize: 25,
		height: 40,
		borderRadius: 20
	}
});
