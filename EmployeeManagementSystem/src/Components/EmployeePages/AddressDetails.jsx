import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";

const AddressDetails = ({
  Country,
  Setcountry,
  setstate,
  Setcity,
  setstreetaddress
}) => {
  let [countrydata, setcountrydata] = useState([]);
  let [statesdata, setstatesdata] = useState([]);
  let [citydata, setcitydata] = useState([]);
  var headers = new Headers();
  headers.append(
    "X-CSCAPI-KEY",
    "TnFESkFST0pvcE4wWmFKTW5ybm8wV3RheVJoTlBxSDdCWXFXUzZ5Nw=="
  );
  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  let getcountry = async () => {
    let country = await fetch(
      "https://api.countrystatecity.in/v1/countries",
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => setcountrydata(result));
  };

  let getstates = async (country) => {
    let states = await fetch(
      `https://api.countrystatecity.in/v1/countries/${country}/states`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => setstatesdata(result));
  };

  let getcitites = async (getstates) => {
    let states = await fetch(
      `https://api.countrystatecity.in/v1/countries/${Country}/states/${getstates}/cities`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => setcitydata(result)     );
  };

  let counrtyfunc = (e) => {
    Setcountry(e.target.value);
    getstates(e.target.value);
  };
  let statefunc = (e) => {
    setstate(e.target.value);
    getcitites(e.target.value);
  };
  let cityfunc = (e) => {
    Setcity(e.target.value);
  };

  useEffect(() => {
    getcountry();
  }, []);

  console.log(Country);

  return (
    <>
      <Flex w={"100%"} flexDirection="column" gap={4}>
        <Flex mt={2} gap={8}>
          <FormControl isRequired>
            <FormLabel  color={"blue.700"}> Country </FormLabel>
            <Select
              placeholder="Select Country"
              onChange={counrtyfunc}
              border={"1px"}
              borderColor={"blue.400"}
            >
              {countrydata?.map((el) => (
                <option value={el.iso2}  >{el.name} </option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel  color={"blue.700"}> State </FormLabel>
            <Select
              placeholder="Select State"
              onChange={statefunc}
              border={"1px"}
              borderColor={"blue.400"}
            >
              {statesdata?.map((el) => (
                <option value={el.iso2}>{el.name} </option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel  color={"blue.700"}> City</FormLabel>
            <Select
              placeholder="Select City"
              onChange={cityfunc}
              border={"1px "}
              borderColor={"blue.400"}
            >
              {citydata?.map((el) => (
                <option value={el.iso2}>{el.name} </option>
              ))}
            </Select>
          </FormControl>
        </Flex>
        <Flex gap={14}     w={"50%"}> 
          <FormControl isRequired>
            <FormLabel  color={"blue.700"}>Streat Name </FormLabel>
            <Textarea
              placeholder="Enter Streat/Area/Location"
              onChange={(e)=>setstreetaddress(e.target.value)}
              colorScheme={"red"}
              border={"1px"}
              borderColor={"blue.400"}
            />
          </FormControl>
        
        </Flex>
      </Flex>
    </>
  );
};

export default AddressDetails;
