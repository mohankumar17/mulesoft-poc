import React, { useEffect, useState } from "react";
import {
  Stack,
  Typography,
  Checkbox,
  Input,
  FormControl,
  Chip,
  Box,
  OutlinedInput,
  Select,
  InputLabel,
  MenuItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../themes";
import { getCMSSystems, getProject } from "../../../utils/apiServices";
import ButtonComp from "../../atoms/Button";

const FormCard = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  padding: "1.5em",
  borderRadius: "0.5em",
  gap: "0.625em",
  backgroundColor: `${theme.palette.background.default}`,
  width: "36.4375em",
  filter: "drop-shadow(0px 0px 26px rgba(233, 232, 237, 0.5))",
  [theme.breakpoints.down("sm")]: {
    padding: "0.3em",
  },
});

const BuilderForm = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "0.9375em",
  width: "33.4375em",
});

const HeadingText = styled(Typography)({
  letterSpacing: "-0.005em",
  color: `${theme.palette.text.secondary}`,
});

const LabelTextA = styled(Typography)({
  fontSize: "0.75em",
  lineHeight: "1.125em",
  color: `${theme.palette.text.disabled}`,
});

const LabelTextB = styled(Typography)({
  fontSize: "0.75em",
  lineHeight: "1.5em",
  color: `${theme.palette.background.default}`,
});

const InputField = styled(Input)({
  fontSize: "0.875em",
  lineHeight: "1.125em",
  fontWeight: "400",
  color: `${theme.palette.text.primary}`,
  "&:before": { borderBottomColor: `${theme.palette.grey[100]}` },
  "&:after": { borderBottomColor: `${theme.palette.grey[100]}` },
});

const StackField = styled(Stack)({
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0em",
  gap: "1em",
  width: "100%",
});

const DownloadButton = styled(ButtonComp)({
  margin: "0 auto",
  textTransform: "none",
  backgroundColor: `${theme.palette.secondary.dark}`,
  "&:hover": {
    backgroundColor: `${theme.palette.primary.dark}`,
  },
});

const LabelTextC = styled(ListItemText)({
  fontSize: "0.875em",
  lineHeight: "1.125em",
  color: `${theme.palette.text.primary}`,
});

const LabelTextF = styled(InputLabel)({
  fontSize: "0.875em",
  lineHeight: "1.125em",
  color: `${theme.palette.text.primary}`,
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ProjectBuilderForm = () => {
  const [name, setName] = useState("");
  const [systems, setSystems] = useState([]);
  const [selSystems, setSelSystems] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelSystems(typeof value === "string" ? value.split(",") : value);
  };

  const handleSubmitClick = () => {
    getProject(selSystems, name);
  };

  useEffect(() => {
    const systemsData = getCMSSystems();
    const getCMSSystemNames = async () => {
      const allSystems = await systemsData;
      setSystems(allSystems);
    };
    getCMSSystemNames();
    console.log(systems);
  }, []);

  return (
    <FormCard>
      <BuilderForm>
        <HeadingText variant="subtitle1">Project Builder</HeadingText>

        <StackField>
          <LabelTextA variant="caption2">Application Name</LabelTextA>
          <InputField
            id="name"
            value={name}
            onChange={handleNameChange}
            type="text"
            fullWidth
            inputProps={{ "data-testid": "nameChange" }}
          />

          <LabelTextA variant="caption2">Select Systems</LabelTextA>

          {systems.length > 0 && (
            <FormControl sx={{ width: "-webkit-fill-available" }}>
              <LabelTextF id="multiple-chip-label">CMS</LabelTextF>
              <Select
                labelId="multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={selSystems}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(systems) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {systems.map((value, index) => (
                      <Chip key={index} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {systems.map((eachSystem, index) => (
                  <MenuItem key={index} value={eachSystem}>
                    <Checkbox checked={selSystems.indexOf(eachSystem) > -1} />
                    <LabelTextC primary={eachSystem}>{eachSystem}</LabelTextC>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <DownloadButton onClick={handleSubmitClick}>
            <LabelTextB variant="caption2">Download Project</LabelTextB>
          </DownloadButton>
        </StackField>
      </BuilderForm>
    </FormCard>
  );
};

export default ProjectBuilderForm;
