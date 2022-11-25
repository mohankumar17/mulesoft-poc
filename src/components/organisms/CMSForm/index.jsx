import React, { useEffect, useState } from "react";
import {
  Stack,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../themes";
import {
  getSystems,
  getAuthTypes,
  getCreds,
  postCMSSystem,
} from "../../../utils/apiServices";
import ButtonComp from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

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

const LabelTextC = styled(Typography)({
  fontSize: "0.875em",
  lineHeight: "1.125em",
  color: `${theme.palette.text.primary}`,
});

const LabelTextD = styled(Typography)({
  fontSize: "0.875em",
  lineHeight: "1.125em",
  color: `${theme.palette.success.main}`,
});

const LabelTextE = styled(Typography)({
  fontSize: "0.875em",
  lineHeight: "1.125em",
  color: `${theme.palette.error.main}`,
});

const LabelTextF = styled(InputLabel)({
  fontSize: "0.875em",
  lineHeight: "1.125em",
  color: `${theme.palette.text.primary}`,
});

const InputField = styled(TextField)({
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

const NextButton = styled(ButtonComp)({
  margin: "0 auto",
  textTransform: "none",
  backgroundColor: `${theme.palette.secondary.dark}`,
  "&:hover": {
    backgroundColor: `${theme.palette.primary.dark}`,
  },
});

const ButtonStack = styled(Stack)({
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "0em",
  justifyContent: "space-between",
  width: "-webkit-fill-available",
});

const CMSForm = () => {
  const navigate = useNavigate();
  const [flowUI, setFlowUI] = useState(0);
  const [systems, setSystems] = useState([]);

  const [selSystem, setSelSystem] = useState("");
  const handleSystemChange = (event) => {
    setSelSystem(event.target.value);
  };

  const [authTypes, setAuthTypes] = useState([]);
  const [selAuthType, setSelAuthType] = useState("");
  const handleAuthTypeChange = (event) => {
    setSelAuthType(event.target.value);
  };

  const [authCreds, setAuthCreds] = useState([]);

  const [credVals, setCredVals] = useState({});
  const handleCredChange = (event) => {
    credVals[event.target.name] = event.target.value;
    setCredVals(credVals);
  };

  const [cmsRes, setCmsRes] = useState(0);

  const handleNextClick = () => {
    if (flowUI === 2) {
      let jsonPayload = {
        system: selSystem.toLowerCase(),
        authType: selAuthType,
        connAttr: credVals,
      };

      const resData = postCMSSystem(jsonPayload);
      const postCMSRes = async () => {
        const res = await resData;
        if (res.status === 201) {
          setCmsRes(1);
        } else {
          setCmsRes(2);
        }
      };
      postCMSRes();
    }
    setFlowUI(flowUI + 1);
  };

  const handleBackClick = () => {
    setFlowUI(flowUI - 1);
    setCmsRes(0);

    if (flowUI === 1) {
      navigate("/");
    } else if (flowUI === 2) {
      setSelSystem("");
      setSelAuthType("");
    } else if (flowUI === 3) {
      setCredVals({});
    }
  };

  useEffect(() => {
    const systemsData = getSystems();
    const getSystemNames = async () => {
      const allSystems = await systemsData;
      setSystems(allSystems);
    };
    getSystemNames();
    setFlowUI(flowUI + 1);
  }, []);

  useEffect(() => {
    const authData = getAuthTypes(selSystem);
    const getSysAuth = async () => {
      const authTypes = await authData;
      setAuthTypes(authTypes);
    };
    getSysAuth();
  }, [selSystem]);

  useEffect(() => {
    const credsData = getCreds(selSystem, selAuthType);
    const getSysCred = async () => {
      const authCreds = await credsData;
      setAuthCreds(authCreds);
    };
    getSysCred();
  }, [selAuthType]);

  return (
    <FormCard>
      <BuilderForm>
        <HeadingText variant="subtitle1" data-testid="formHeading">
          CMS Store
        </HeadingText>

        <StackField>
          {flowUI === 1 && (
            <>
              {systems.length > 0 && (
                <>
                  <FormControl
                    required
                    sx={{ width: "-webkit-fill-available" }}
                  >
                    <LabelTextF id="select-system-label">Systems</LabelTextF>
                    <Select
                      labelId="select-system-label"
                      id="select-required-sys"
                      value={selSystem}
                      label="System *"
                      onChange={handleSystemChange}
                    >
                      {systems.map((eachSystem, index) => {
                        return (
                          <MenuItem key={index} value={eachSystem}>
                            <LabelTextC>{eachSystem}</LabelTextC>
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </>
              )}

              {authTypes.length > 0 && (
                <>
                  <FormControl
                    required
                    sx={{ width: "-webkit-fill-available" }}
                  >
                    <LabelTextF id="select-authtype-label">AuthType</LabelTextF>
                    <Select
                      labelId="select-authtype-label"
                      id="select-required-auth"
                      value={selAuthType}
                      label="AuthType *"
                      onChange={handleAuthTypeChange}
                    >
                      {authTypes.map((eachType, index) => {
                        return (
                          <MenuItem key={index} value={eachType}>
                            <LabelTextC>{eachType}</LabelTextC>
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </>
              )}
            </>
          )}

          {flowUI === 2 && (
            <>
              {authCreds.length > 0 && (
                <>
                  {authCreds.map((eachCred, index) => {
                    return (
                      <Box component="form" key={index}>
                        <InputField
                          required
                          id="outlined-field"
                          label={eachCred}
                          value={credVals.eachCred}
                          name={eachCred}
                          onChange={handleCredChange}
                        />
                      </Box>
                    );
                  })}
                </>
              )}

              <LabelTextA variant="caption2" sx={{ margin: "0px auto" }}>
                Click Next to add {selSystem.toUpperCase()} to CMS Store
              </LabelTextA>
            </>
          )}

          {flowUI === 3 && (
            <>
              {cmsRes === 0 && (
                <LabelTextD variant="caption2">Adding to CMS Store</LabelTextD>
              )}
              {cmsRes === 1 && (
                <LabelTextD variant="caption2">
                  Successfully added to CMS Store
                </LabelTextD>
              )}
              {cmsRes === 2 && (
                <LabelTextE variant="caption2">
                  Failed adding to CMS Store
                </LabelTextE>
              )}
              <ButtonStack>
                <NextButton
                  onClick={() => {
                    setSelSystem("");
                    setAuthTypes("");
                    setCmsRes(0);
                    setFlowUI(1);
                  }}
                >
                  <LabelTextB variant="caption2"> Add more </LabelTextB>
                </NextButton>

                <NextButton
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <LabelTextB variant="caption2"> Home Page </LabelTextB>
                </NextButton>
              </ButtonStack>
            </>
          )}

          {flowUI !== 3 && (
            <ButtonStack>
              <NextButton onClick={handleBackClick}>
                <LabelTextB variant="caption2"> Back </LabelTextB>
              </NextButton>

              <NextButton onClick={handleNextClick}>
                <LabelTextB variant="caption2"> Next </LabelTextB>
              </NextButton>
            </ButtonStack>
          )}
        </StackField>
      </BuilderForm>
    </FormCard>
  );
};

export default CMSForm;
