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

const Home = ({ navigation }) => {

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

    function renderSeeRecipeCard() {
        return (
            <View
            style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                borderRadius: 10,
                backgroundColor: COLORS.lightBlue
            }}
            >
                {/* Image */}
                <View 
                style={{
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                    <Image 
                    source={images.recipe}
                    style={{
                        width: 80,
                        height: 80
                    }}
                    />
                </View>
                {/* Text */}
                    <View
                    style={{
                        flex: 1,
                        padding:5,
                        paddingHorizontal: SIZES.radius
                    }}
                    >
                        <Text
                        style={{
                            width: "70%",
                            ...FONTS.body4
                        }}
                        > You have 12 recipes that you haven't tried yet </Text>
                        <TouchableOpacity
                        style={{
                            marginTop:10
                        }}
                        onPress={() => console.log("see recipes")}
                        >
                            <Text
                            style={{
                                color:COLORS.darkBlue,
                                textDecorationLine: 'underline',
                                ...FONTS.h4
                            }}
                            > See Recipes </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }

    function renderTrendingSection() {
        return (
            <View
            style={{
                marginTop: SIZES.padding
            }}
            >
                <Text
                style={{
                    marginHorizontal: SIZES.padding,
                    ...FONTS.h2
                }}
                >
                Trending Recipe
                </Text>
                <FlatList
                    data={dummyData.trendingRecipes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item, index}) => {
                        return (
                            <TrendingCard
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : 0
                            }}
                            recipeItem={item}
                            onPress={() => navigation.navigate("Recipe",{recipe:item})}
                            />
                        )
                    }}
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
                    {/* See Recipe Card */}
                    {renderSeeRecipeCard()}
                    {/* Trending Sectiopn */}
                    {renderTrendingSection()}
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

export default Home;