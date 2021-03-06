import * as THREE from 'three';
import {ShaderPass} from 'three-effectcomposer-es6';
import KaleidoShader from '../shaders/KaleidoShader';
import BadTVShader from '../shaders/BadTVShader';
import RGBShiftShader from '../shaders/RGBShiftShader';
import HueSaturationShader from '../shaders/HueSaturationShader';
import BrightnessContrastShader from '../shaders/BrightnessContrastShader';
import DigitalGlitch from '../shaders/DigitalGlitch';
import FocusShader from '../shaders/FocusShader';
import MirrorShader from '../shaders/MirrorShader';

const getShaderPasses = () => {
  THREE.BadTVShader = BadTVShader;
  THREE.KaleidoShader = KaleidoShader;
  THREE.RGBShiftShader = RGBShiftShader;
  THREE.HueSaturationShader = HueSaturationShader;
  THREE.BrightnessContrastShader = BrightnessContrastShader;
  THREE.DigitalGlitch = DigitalGlitch;
  THREE.FocusShader = FocusShader;
  THREE.MirrorShader = MirrorShader;
  const badTVPass = new ShaderPass( THREE.BadTVShader );
  const kaleidoPass = new ShaderPass( THREE.KaleidoShader );
  const rgbShiftPass = new ShaderPass( THREE.RGBShiftShader );
  const hueSaturationPass = new ShaderPass( THREE.HueSaturationShader );
  const brightnessContrastPass = new ShaderPass( THREE.BrightnessContrastShader );
  const digitalGlitchPass = new ShaderPass( THREE.DigitalGlitch );
  const focusShaderPass = new ShaderPass( THREE.FocusShader );
  const mirrorShaderPass = new ShaderPass( THREE.MirrorShader );

  const shaderPasses = {
    kalei: kaleidoPass,
    badTv: badTVPass,
    rgbShift: rgbShiftPass,
    hueSaturation: hueSaturationPass,
    brightnessContrast: brightnessContrastPass,
    digitalGlitch: digitalGlitchPass,
    focus: focusShaderPass,
    mirror: mirrorShaderPass,
  };

  return shaderPasses;
};

export default getShaderPasses;
