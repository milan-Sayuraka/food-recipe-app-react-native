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
import { CategoryCard, TrendingCard } from "../components"

const Search = ({ navigation }) => {

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
                        color: COLORS.darkGreen,
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
                backgroundColor: COLORS.lightGray
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

    function renderCategoryHeader(){
        return ( 
            <View
            style={{
                flexDirection:'row',
                alignItems: 'center',
                marginTop: 20,
                marginHorizontal: SIZES.padding   
            }}
            >
                {/* Section Title */}
                <Text
                style={{
                    flex:1,
                    ...FONTS.h2
                }}
                >
                    Categories
                </Text>
                 {/* View All */}
                 <TouchableOpacity>
                     <Text
                     style={{
                         color: COLORS.gray,
                         ...FONTS.body4
                     }}
                     >
                         View All
                     </Text>
                 </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView
        style={{
            flex:1,
            backgroundColor: COLORS.white
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
                    {/* Category Header */}
                    {renderCategoryHeader()}
                </View>
            }
            renderItem={({item}) => {
                return(
                    <CategoryCard
                    containerStyle={{
                        marginHorizontal: SIZES.padding
                    }}
                     categoryItem={item}
                     onPress={() => navigation.navigate("Recipe",{recipe:item})}
                    />
                )
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

export default Search;