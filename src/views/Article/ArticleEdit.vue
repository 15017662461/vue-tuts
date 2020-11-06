<template>
  <Form :model="formItem" :label-width="80">
    <FormItem label="id">
      <Input v-model="this.id" placeholder="Enter something..." disabled />
    </FormItem>
    <FormItem label="Author">
      <Input v-model="this.author" placeholder="please enter author" />
    </FormItem>
    <FormItem label="EditTime">
      <Row>
        <Col span="11">
          <DatePicker
            type="date"
            placeholder="Select date"
            v-model="formItem.date"
          ></DatePicker>
        </Col>
        <Col span="2" style="text-align: center"></Col>
        <Col span="11">
          <TimePicker
            type="time"
            placeholder="Select time"
            v-model="formItem.time"
          ></TimePicker>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="Radio">
      <RadioGroup v-model="formItem.radio">
        <Radio label="male">Male</Radio>
        <Radio label="female">Female</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="Checkbox">
      <CheckboxGroup v-model="formItem.checkbox">
        <Checkbox label="Eat"></Checkbox>
        <Checkbox label="Sleep"></Checkbox>
        <Checkbox label="Run"></Checkbox>
        <Checkbox label="Movie"></Checkbox>
      </CheckboxGroup>
    </FormItem>
    <FormItem label="Switch">
      <i-switch v-model="formItem.switch" size="large">
        <span slot="open">On</span>
        <span slot="close">Off</span>
      </i-switch>
    </FormItem>
    <FormItem label="Slider">
      <Slider v-model="formItem.slider" range></Slider>
    </FormItem>
    <FormItem label="Text">
      <Input
        v-model="formItem.textarea"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 5 }"
        placeholder="Enter something..."
      ></Input>
    </FormItem>
    <FormItem>
      <Button type="primary">Submit</Button>
      <Button style="margin-left: 8px">Cancel</Button>
    </FormItem>
  </Form>
</template>

<script>
import { getArticle } from "@/network/article.js";
export default {
  name: "ArticleEdit",
  components: {},
  props: {},
  data() {
    return {
      id: this.$route.query.id,
      author:" ",
      formItem: {
        input: "",
        select: "",
        radio: "male",
        checkbox: [],
        switch: true,
        date: "",
        time: "",
        slider: [20, 50],
        textarea: "",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    getArticle(this.id).then((resp) => {
      console.log(resp);
      this.author = resp.data.author;

    });
  },
  mounted() {},
  updated() {},
  destroyed() {},
};
</script>
<style scoped>
</style>