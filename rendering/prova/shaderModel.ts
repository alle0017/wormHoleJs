import { TypedArray } from "rendering/rendererModel";
import { Uniform } from '../rendererModel';

export type ShaderCode = { 
      fragment: string; 
      vertex: string; 
};

export type DataLayoutInfos = {
      name: string;
      type: GPUVertexFormat;
      components: number;
      size: number;
      bindingLocation: number;
      offset: number;
      numberOfComponents: number;
      stride: number;
      normalize: boolean;
      dataType: number;
      data?: number[];
}

export abstract class Shader {
      static readonly FRAGMENT = 0;
      static readonly VERTEX = 1;

      static MAT3x2 = 0;
      static MAT2x2 = 1;
      static MAT3x3 = 2;
      static MAT4x4 = 3;

      static VEC2 = 4;
      static VEC3 = 5;
      static VEC4 = 6;

      static INT = 10;
      static FLOAT = 7;
      static BOOL = 9;

      static TEXTURE2D = 8;
      static SAMPLER = 11;

      static types: string[] = [];

      protected varyings: string[] = [];
      protected attributes: string[] = [];
      protected uniforms: string[] = [];

      protected positionTransformations: string[] = [];

      protected vCode: string[] = [];
      protected fCode: string[] = [];

      protected fragmentReturnedValue: string = '';
      protected vertexReturnedValue: string = '';


      protected _attributesData: DataLayoutInfos[] = [];
      protected _uniformsData: DataLayoutInfos[] = [];

      get attributesData(): DataLayoutInfos[] {
            return this._attributesData;
      }
      
      protected set attributesData(data: DataLayoutInfos[]) { }

      get uniformsData(): DataLayoutInfos[] {
            return this._uniformsData;
      }
      
      protected set uniformsData(data: DataLayoutInfos[]) { }

      constructor(){}     

      

      protected abstract getType(type: number): string;

      protected abstract resetVariables(): this;



      protected abstract getFragment(): string;

      protected abstract getVertex(): string;

        
      protected abstract getUniformsDefinition(a0: any): string;

      protected abstract getVaryingsDefinition(): string;

      protected abstract getAttributesDefinition(): string;

      protected abstract getPositionTransformations(): string;


      protected abstract addAttribute(name: string, type: number): this;

      protected abstract addUniform(name: string, type: number, arg0: any): this;

      protected abstract addVarying(name: string, type: number): this;


      abstract usePerspective(): this;

      abstract useDynamicElement(): this;

      abstract useAnimation2D(): this;

      abstract useTexture(): this;

      abstract useInterpolatedColor(): this;

      abstract useUniformColor(r: number, g: number, b: number, a: number): this;

      abstract useDisplacementMap(): this;

      /**@see https://veeenu.github.io/blog/implementing-skeletal-animation/ */
      //TODO: abstract skeletalAnimation(): this;


      abstract get(): ShaderCode;

}