import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  SparklesIcon,
  UserIcon,
  MagnifyingGlassIcon
} from "react-native-heroicons/outline";
import Categories from "../components/categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";


const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient.fetch(
      ` *[_type == "featured"]{
            ...,
        restaurant[]->{
          ...,
          dishes[]->
        }
        }
      `
    ).then(data => {
      setFeaturedCategories(data);
    });
  }, []);

  console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-5">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1 justify-between">
            <Text className="font-bold text-gray-400 text-xs">
              Delivery Now
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 items-center
           space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20}/>
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
              />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
        
        {/* Body */}
        <ScrollView className='bg-gray-100'
            contentContainerStyle={{
                paddingBottom: 100
            }}
        >
            {/* Categories */}
            <Categories />


            {/* Featured Rows */}
            <FeaturedRow 
                id="123"
                title='Featured'
                description='Paid placements from our partners'
            />
            <FeaturedRow 
                id="1234"
                title='Featured'
                description='Paid placements from our partners'
            />
            <FeaturedRow 
                id="12345"
                title='Featured'
                description='Paid placements from our partners'
            />
        </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
