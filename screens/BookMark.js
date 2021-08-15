import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import {images, COLORS, SIZES, FONTS, icons, dummyData} from "../constants"
import { CategoryCard, TrendingCard, BookMarkedCategory } from "../components"

const BookMark = ({ navigation }) => {

    function renderHeader(){
        return (
            <View
            style={{
                flexDirection:'row',
                marginHorizontal: SIZES.padding,
                alignItems: 'center',
                height: 80
            }}
            >
                {/* Text */}
                <View
                style={{
                    flex:1,
                }}
                >
                    <Text
                    style={{
                        color: COLORS.darkBlue,
                        ...FONTS.h2
                    }}
                    >Hello Milan,</Text>
                    <Text
                       style={{
                        marginTop:3,
                        color: COLORS.gray,
                        ...FONTS.h3
                    }}
                    >What you want to cook today?</Text>
                </View>
                {/* Image */}
                <TouchableOpacity
                onPress={() => console.log("Profile")}
                >
                    <Image
                    source={images.UserProfile2}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20
                    }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderSearchBar() {
        return (
            <View
            style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
                marginHorizontal:SIZES.padding,
                paddingHorizontal: SIZES.radius,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray,
                marginBottom: 20
            }}
            >
                <Image
                source={icons.search}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.gray
                }}
                />
                <TextInput 
                style={{
                    marginLeft: SIZES.radius,
                    ...FONTS.body3
                }}
                placeholderTextColor={COLORS.gray}
                placeholder="Search Recipes"
                />
            </View>
        )
    }

    return (
        <SafeAreaView
        style={{
            flex:1,
            backgroundColor: COLORS.white,

        }}
        >
            <FlatList
            data={dummyData.categories}
            keyExtractor={item => `${item.id}`}
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
                <View>
                    {/* Header */}
                    {renderHeader()}
                    {/* Search Bar */}
                    {renderSearchBar()}
                </View>
            }
            renderItem={({item}) => {
                // filter bookmark list
                if (item.isBookmark) {
                    return(
                        <BookMarkedCategory
                        containerStyle={{
                            marginHorizontal: SIZES.padding
                        }}
                         categoryItem={item}
                         onPress={() => navigation.navigate("Recipe",{recipe:item})}
                        />
                    )
                }

            }}
            ListFooterComponent={
                <View 
                style={{
                    marginBottom:100
                }}
                />
            }
            />
        </SafeAreaView>
    )
}

export default BookMark;