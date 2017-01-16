/***********************************************
 * 
 * MIT License
 *
 * Copyright (c) 2016 珠峰课堂,Ramroll
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNCTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import React, {Component} from 'react'

import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native'

const {width, height} = Dimensions.get('window')
const sliderItemStyle = {width, height : width * 0.6}
export class UserCenter extends Component{

  
  render(){
    return (
      <ScrollView style={{flex : 1, backgroundColor : "white"}}>
        <View>
          <Image source={require("./images/usercenter.png")} style={sliderItemStyle} >
          </Image>
        </View>

        <View>
          <StripedButton icon={require("./images/uc/question.png")}>常见问题</StripedButton>
          <StripedButton icon={require("./images/uc/user.png")}>关于我们</StripedButton>
          <StripedButton icon={require("./images/uc/password.png")}>修改密码</StripedButton>
        </View>
      </ScrollView>
    )
  }
}

const StripedButton = ({icon, children, onPress}) => {

  return <TouchableOpacity onPress={onPress} style={styles.stripedButton}>
    <Image source={icon} style={styles.icon} />
    <Text>{children}</Text>
    <Image source={require("./images/right-arrow.png")}></Image>
  </TouchableOpacity>
}




const styles = StyleSheet.create({
  stripedButton : {
    flexDirection : 'row',
    height : 40,
    alignItems : 'center'
  },
  icon : {
    width : 20,
    height : 20
    
  }
})