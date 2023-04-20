import React from "react";
import Entity from "../Components/Entity";

export default {
  title: "Card",
  component: Entity
}

const Template = args => <Entity {...args} />;
export const card = Template.bind({})
card.args = {
  isShow: true,
  picture:"https://randomuser.me/api/portraits/men/85.jpg", 
  firstName:"Alex", 
  lastName:"Morgan", 
  city:"New York", 
  state:"New York", 
  phone:"35976252", 
  id: '1'
}