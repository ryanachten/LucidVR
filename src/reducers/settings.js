const settingsReducerDefaultState = {
  fullscreenMode: false,
  shapeSettings: {
    zoomOut: false,
    geometryShape: 'sphere',
  },
  textureSettings: {
    tileCount: 4,
    rotateTexture: false,
    rotateX: 0.01,
    rotateY: 0.01
  },
  shaderSettings: {
    activeShaders: undefined,
    allShadersAndDefaults:{
      kalei: {
        sides: { min: 0.1, max: 20, default: 6 }
      },
      badTv: {
        time: { min: 0.0, max: 10.0, default: 0.0 },
        distortion: { min: 0.0, max: 10.0, default: 3.0 },
        distortion2: { min: 0.0, max: 10.0, default: 5.0 },
        speed: { min: 0.0, max: 1.0, default: 0.2 },
        rollSpeed: { min: 0.0, max: 1.0, default: 0.2 },
      },
      rgbShift: {
        amount: { min: 0, max: 1, default: 0.05 },
        angle: { min: 0, max: (Math.PI*2), default: 0.0 }
      },
      hueSaturation: {
        hue: { min: -1, max: 1, default: 0.5 },
        saturation: { min: -1, max: 1, default: 0.5 }
      },
      brightnessContrast: {
        brightness: { min: -1, max: 1, default: 0 },
        contrast: { min: -1, max: 1, default: 0.5 }
      }
    }
  }
}

export default (state = settingsReducerDefaultState, action) => {
  switch (action.type) {

    case 'SET_FULLSCREEN_MODE':
      return {
        ...state,
        fullscreenMode: action.fullscreenMode
      }
      break;

    case 'SET_ZOOM_OUT':
      let shapeSettings = state.shapeSettings;
      return {
        ...state,
        shapeSettings: {
          ...shapeSettings,
          zoomOut: action.zoomOut
        }
      }
      break;

    case 'SET_GEOMETRY_SHAPE':
       shapeSettings = state.shapeSettings;
        return{
          ...state,
          shapeSettings: {
            ...shapeSettings,
            geometryShape: action.geometryShape
          }
        };
        break;

    case 'SET_TILE_COUNT':
      let textureSettings = state.textureSettings;
      return {
        ...state,
        textureSettings: {
          ...textureSettings,
          tileCount: action.tileCount
        }
      }
      break;

    case 'TOGGLE_TEXTURE_ROTATION':
      textureSettings = state.textureSettings;
      return {
        ...state,
        textureSettings: {
          ...textureSettings,
          rotateTexture: action.rotate
        }
      }
      break;

    case 'SET_TEXTURE_ROTATION':
      textureSettings = state.textureSettings;
      if (action.axis === 'x') {
        return {
          ...state,
          textureSettings: {
            ...textureSettings,
            rotateX: action.speed
          }
        }
      }else if (action.axis === 'y') {
        return {
          ...state,
          textureSettings: {
            ...textureSettings,
            rotateY: action.speed
          }
        }
      }
      break;

    case 'ADD_ACTIVE_SHADER':
      let shaderSettings = state.shaderSettings;
      let activeShaders;
      if (state.shaderSettings.activeShaders) {
        activeShaders = JSON.parse(state.shaderSettings.activeShaders);
      }
      else{
        activeShaders = {}
      }
      activeShaders[action.name] = action.uniformDefaults;
      return{
        ...state,
        shaderSettings: {
          ...shaderSettings,
          activeShaders: JSON.stringify(activeShaders),
        }
      }
      break;

    case 'REMOVE_ACTIVE_SHADER':
      shaderSettings = state.shaderSettings;
      activeShaders = JSON.parse(shaderSettings.activeShaders);
      delete activeShaders[action.shader];
      return {
        ...state,
        shaderSettings: {
          ...shaderSettings,
          activeShaders: JSON.stringify(activeShaders)
        }
      }
      break;

    case 'UPDATE_ALL_SHADER_ORDER':
      shaderSettings = state.shaderSettings;
      return {
        ...state,
        shaderSettings: {
          ...shaderSettings,
          allShadersAndDefaults: action.shaders
        }
      }
      break;

    case 'UPDATE_ACTIVE_SHADER_ORDER':
      shaderSettings = state.shaderSettings;
      return {
        ...state,
        shaderSettings: {
          ...shaderSettings,
          activeShaders: JSON.stringify(action.shaders)
        }
      }
      break;

    case 'UPDATE_SHADER_UNIFORM':
      shaderSettings = state.shaderSettings;
      activeShaders = JSON.parse(state.shaderSettings.activeShaders);
      activeShaders[action.shader][action.uniform] = action.newValue
      return {
        ...state,
        shaderSettings: {
          ...shaderSettings,
          activeShaders: JSON.stringify(activeShaders)
        }
      }
      break;

    default:
      return state;
  }
};
