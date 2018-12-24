import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/ListScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.container} style={styles.container2}>
          <View style={styles.item}>
            <Image source={Images.awesomoCardRender} style={styles.cardImg} />
          </View>
          <View style={styles.item}>
            <Image source={Images.awesomoCardRender} style={styles.cardImg} />
          </View>
          <View style={styles.item}>
            <Image source={Images.awesomoCardRender} style={styles.cardImg} />
          </View>
          <View style={styles.item}>
            <Image source={Images.awesomoCardRender} style={styles.cardImg} />
          </View>
          <View style={styles.item}>
            <Image source={Images.awesomoCardRender} style={styles.cardImg} />
          </View>
          <View style={styles.item}>
            <Image source={Images.awesomoCardRender} style={styles.cardImg} />
          </View>
          <View style={styles.item}>
            <Image source={Images.awesomoCardRender} style={styles.cardImg} />
          </View>
          <View style={styles.item}>
            <Image source={Images.awesomoCardRender} style={styles.cardImg} />
          </View>
        </ScrollView>
      </View>
    )
  }
}
